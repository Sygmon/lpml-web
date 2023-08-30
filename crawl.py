from dataclasses import dataclass
from functools import lru_cache
import os
import re
from threading import Lock, Thread
from typing import Callable
import urllib.parse

from bs4 import BeautifulSoup
from bs4 import NavigableString, Tag
from markdown import markdown
from markdownify import MarkdownConverter
import requests
import yaml

TRANSLATE_LINKS = {
    "про-ліцей": "info/about",
    "якість-освіти": "info/education",
    "для-випускників": "info/for-grads",
    "для-ліцеїстів": "info/for-students",
    "публічна-інформація": "info/public-info",
    "вступ-до-ліцею": "info/for-entrants",
    "для-батьків": "info/for-parents",
    "колектив": "info/staff",
    "матеріали": "info/materials",
    "новини": "blog",
}


class CustomMarkdownConverter(MarkdownConverter):
    def convert_td(self, el, text, convert_as_inline):
        return " " + text.strip().replace("\n", " ") + " |"

    def convert_th(self, el, text, convert_as_inline):
        return super().convert_th(el, text, convert_as_inline).replace("\n", " ")

    def convert_a(self, el, text, convert_as_inline):
        return super().convert_a(el, text, convert_as_inline).replace("\n", " ")

    def convert_hn(self, *args, **kwargs):
        return super().convert_hn(*args, **kwargs).replace("\n", " ")

    def convert_b(self, *args, **kwargs):
        return super().convert_b(*args, **kwargs).replace("\n", " ")


def md(soup, **options):
    return CustomMarkdownConverter(**options).convert(soup)


def clone(el) -> NavigableString | Tag:
    if isinstance(el, NavigableString):
        return type(el)(el)

    copy = Tag(None, el.builder, el.name, el.namespace, el.nsprefix)
    # work around bug where there is no builder set
    # https://bugs.launchpad.net/beautifulsoup/+bug/1307471
    copy.attrs = dict(el.attrs)
    for attr in ("can_be_empty_element", "hidden"):
        setattr(copy, attr, getattr(el, attr))
    for child in el.contents:
        copy.append(clone(child))
    return copy


def clean_url(url: str, unquote=True) -> str:
    if unquote:
        url = urllib.parse.unquote(
            urllib.parse.urlparse(url)
            ._replace(query="", fragment="", params="")
            .geturl()
        )
    return url.rstrip("/").replace("www.lpml.com.ua", "lpml.com.ua")


@dataclass
class TransformedURL:
    """A URL that has been transformed by a crawler."""

    relative_url: str
    path: str | None


class Spider:
    def __init__(self):
        self.lock = Lock()
        self.done: set[str] = set()
        self.initial: set[str] = set()
        self.work: Callable[[str], None] | None = None

    def add(self, target: str) -> None:
        if self.work is None:
            self.initial.add(target)
        else:
            with self.lock:
                if target in self.done:
                    return
                self.done.add(target)
            # print(f"Crawling {target} ({len(self.done)} started)")
            Thread(target=self.work, args=(target,)).start()

    def run(self, work: Callable[[str], None]) -> None:
        self.work = work
        for target in self.initial:
            self.add(target)


class Crawler:
    def __init__(
        self,
        start_url: str,
        target_dir: str = "html_files",
        excluded_saves: list[str] = [],
        metadata: dict[str, dict[str, str]] = {},
    ):
        self.spider = Spider()
        self.spider.add(start_url)
        self.origin = urllib.parse.urlparse(start_url).netloc
        self.target_dir = target_dir
        self.transformed_urls: dict[str, TransformedURL] = {}
        self.paths: set[str] = set()
        self.excluded_saves = excluded_saves
        self.url_sources: dict[str, str] = {}
        self.metadata = metadata

        self.transform_lock = Lock()

    def register_url(self, url: str, source: str) -> str:
        """Register a new URL to crawl and return the new path.

        The URL must be absolute. Will not re-register URLs that have already
        been registered.
        """
        url = clean_url(url, self.crawlable(url))
        with self.transform_lock:
            if url not in self.url_sources:
                self.url_sources[url] = source
        if self.crawlable(url):
            self.spider.add(url)
        return self.transform_url(url).relative_url

    def crawlable(self, url: str) -> bool:
        """Return True if the URL is crawlable."""
        return urllib.parse.urlparse(url).netloc.endswith(self.origin)

    @lru_cache(maxsize=128)
    def parsable(self, url: str) -> bool:
        stripped_url = urllib.parse.urlparse(url).path
        if any(
            stripped_url.endswith(ext)
            for ext in [
                ".jpg",
                ".png",
                ".gif",
                ".pdf",
                ".docx",
                ".xlsx",
                ".doc",
                ".xls",
                ".zip",
                ".aspx",
            ]
        ):
            return False
        if stripped_url.startswith("/media/"):
            return False

        try:
            response = requests.head(url, timeout=5)
            content_type = response.headers["content-type"]
            return content_type.startswith("text/html")
        except requests.exceptions.RequestException:
            return False

    def transform_page_path(self, path: str) -> str:
        """Transform a path into one that follows the new standard."""
        translated = False
        if path in ["/", ""]:
            path = "index"
            translated = True
        path = path.rstrip("/").rstrip(".html").lstrip("/")
        for original, new in TRANSLATE_LINKS.items():
            if path.startswith(original):
                path = path.replace(original, new)
                translated = True
        if not translated:
            path = "info/" + path
        return path

    def transform_media_path(self, path: str, source: str | None) -> str:
        """Transform a path into one that follows the new standard."""
        # We remove media/NN and css/N prefixes, as well as /css/images
        regex = re.compile(r"^/(media|css)/\d+|/css/images")
        if regex.match(path):
            path = regex.sub("", path)
        # We remove extra slashes
        path = path.strip("/")
        # Prepend source name itself if it exists
        if source is not None:
            source_name = source.split("/")[-1][:20]
            path = f"{source_name}/{path}"
        return os.path.join("files", path.replace("/", "-"))

    def prepare_path(self, path: str, url: str, max_length: int = 80) -> str:
        """Prepare a path"""
        if len(path) > max_length:
            # Extract file extension
            extension = ""
            if "." in path:
                extension = path.rsplit(".", 1)[1]
                path = path.rsplit(".", 1)[0]
            # Truncate path
            path = path[: max_length - len(extension) - 1]
            # Re-add extension
            if extension:
                path += "." + extension
        # Assure that the path is unique
        while path in self.paths:
            print(f"Path {path} already exists, adding -", url)
            if "." in path:
                path = path.rsplit(".", 1)[0] + "-." + path.rsplit(".", 1)[1]
            else:
                path += "-"
        self.paths.add(path)
        return path

    def transform_url(self, url: str) -> TransformedURL:
        with self.transform_lock:
            if not self.crawlable(url):
                return TransformedURL(relative_url=url, path=None)
            if url in self.transformed_urls:
                return self.transformed_urls[url]
            relative_url = urllib.parse.urlparse(url).path
            relative_url = urllib.parse.unquote(relative_url)
            if self.parsable(url):
                path = self.transform_page_path(relative_url)
                path = self.prepare_path(path, url)
                self.transformed_urls[url] = TransformedURL(
                    "/" + path, os.path.join("content", path + ".md")
                )
            else:
                source = self.url_sources.get(url)
                path = self.transform_media_path(relative_url, source)
                path = self.prepare_path(path, url)
                self.transformed_urls[url] = TransformedURL(
                    "/" + path, os.path.join("public", path)
                )
            return self.transformed_urls[url]

    def download(self, url: str) -> bytes:
        """Download the HTML at the given URL."""
        response = requests.get(url, timeout=5)
        return response.content

    def parse(self, html: str, original_url: str) -> BeautifulSoup:
        """Parse the HTML and register any new URLs."""
        soup = BeautifulSoup(html, "html.parser")
        for link in soup.find_all("a"):
            url = link.get("href")
            if url:
                new_url = self.register_url(
                    urllib.parse.urljoin(original_url, url), original_url
                )
                link["href"] = new_url

        for link in soup.find_all("img"):
            url = link.get("src")
            if url:
                new_url = self.register_url(
                    urllib.parse.urljoin(original_url, url), original_url
                )
                link["src"] = new_url

        for eltype in ["strong"]:
            for element in soup.find_all(eltype):
                while element.next_sibling and element.next_sibling.name == eltype:
                    element.string += element.next_sibling.string
                    element.next_sibling.decompose()

        for eltype in ["u", "span"]:
            for element in soup.find_all(eltype):
                element.unwrap()

        for element in soup.find_all(colspan=True):
            colspan = int(element["colspan"])
            element["colspan"] = 1
            for _ in range(1, colspan):
                new_element = clone(element)
                new_element.string = ""
                element.insert_after(new_element)

        for element in soup.find_all(rowspan=True):
            rowspan = int(element["rowspan"])
            element["rowspan"] = 1
            next_row = element.parent
            for _ in range(1, rowspan):
                while (
                    not isinstance(next_row.next_sibling, Tag) and next_row.next_sibling
                ):
                    next_row = next_row.next_sibling
                next_row = next_row.next_sibling
                if next_row is None:
                    break
                index_in_row = element.parent.index(element)
                new_element = clone(element)
                new_element.string = ""
                next_row.insert(index_in_row, new_element)

        for element in soup.find_all("span", {"class": "percentsprogress2121"}):
            element.string = "63%; 443000/700000"
        for element in soup.find_all("div", {"class": "widthprogress2121"}):
            element.decompose()
        for element in soup.find_all("div", {"class": "progress2121"}):
            element.decompose()
        for element in soup.find_all("div", {"class": "progressTitle"}):
            element.decompose()

        # If we have <p><img /></p> twice or more in a row, we merge those
        for element in soup.find_all("p"):
            # Check whether the only child is an image
            if len(element.contents) != 1 or element.contents[0].name != "img":
                continue
            next_sibling = element.next_sibling
            while True:
                while not isinstance(next_sibling, Tag) and next_sibling:
                    next_sibling = next_sibling.next_sibling
                # Check whether the next element is a paragraph
                if not next_sibling or next_sibling.name != "p":
                    break
                # Check whether the only child of the next element is an image
                if (
                    len(next_sibling.contents) != 1
                    or next_sibling.contents[0].name != "img"
                ):
                    break
                # Merge the two paragraphs
                element.contents[0].insert_after(next_sibling.contents[0])
                next_sibling, _ = next_sibling.next_sibling, next_sibling.decompose()

        # Make the first row of tables without a header a header, manually confirming each
        for table in soup.find_all("table"):
            if table.find("thead"):
                continue
            first_row = table.find("tr")
            if not first_row:
                continue
            with self.transform_lock:
                print(original_url)
                print("Table without header found:")
                print(
                    "|".join(
                        [
                            cell.text.replace("\n", " ")
                            for cell in first_row.find_all("td")
                        ]
                    )
                )
                confirmation = input("Do you want to make this a header? (y/n) ")
            if confirmation != "y":
                continue
            for cell in first_row.find_all("td"):
                cell.name = "th"
            thead = soup.new_tag("thead")
            thead.append(clone(first_row))
            table.insert(0, thead)
            first_row.decompose()

        return soup

    def transform(self, soup: BeautifulSoup) -> str:
        """Transform the HTML into Markdown."""
        # Step 1 is to replace p.header with h1
        for header in soup.find_all("p", {"class": "header"}):
            header.name = "h1"
            header["class"] = "header"
        # Step 2 is to replace p.blue with h2
        for header in soup.find_all("p", {"class": "blue"}):
            header.name = "h2"
            header["class"] = "blue"
        # We also fully remove the links with the text "Повернутися на головну" and "Читати усі новини"
        for link in soup.find_all("a"):
            if link.text.strip() in ["Повернутися на головну", "Читати усі новини"]:
                link.decompose()
        # Now we extract the markdown
        content = soup.find("div", {"class": "content"})
        markdown_content = md(
            str(content.prettify() if content else ""), heading_style="ATX"
        ).strip()
        # We clear all lines of trailing whitespace
        markdown_content = "\n".join(
            line.strip() for line in markdown_content.split("\n")
        )
        # And we remove all the triple newlines
        while "\n\n\n" in markdown_content:
            markdown_content = markdown_content.replace("\n\n\n", "\n\n")
        return markdown_content

    def crawl_page(self, url: str) -> None:
        """Crawl a single page."""
        try:
            url = clean_url(url, self.crawlable(url))
            content = self.download(url)
            destination = self.transform_url(url).path
            if self.parsable(url):
                parsed = self.parse(content.decode("utf-8"), url)
                text_content = self.transform(parsed)
                metadata = self.metadata.get(url, {})
                lines = text_content.split("\n")
                if lines[0].startswith("#"):
                    text_content = "\n".join(lines[1:]).strip()
                    metadata["title"] = "".join(
                        BeautifulSoup(markdown(lines[0]), "html.parser").findAll(
                            string=True
                        )
                    )
                if metadata:
                    text_content = (
                        "---\n"
                        + yaml.safe_dump(metadata, default_flow_style=False)
                        + "---\n"
                        + text_content
                    )
                content = text_content.encode("utf-8")
            if destination:
                if destination in self.excluded_saves:
                    return
                target_location = os.path.join(self.target_dir, destination)
                os.makedirs(os.path.dirname(target_location), exist_ok=True)
                with open(target_location, "wb") as file:
                    file.write(content)
        except requests.exceptions.RequestException:
            pass

    def crawl(self) -> None:
        """Crawl the URLs."""
        self.spider.run(self.crawl_page)


def extract_news_metadata(url: str) -> dict[str, dict[str, str]]:
    soup = BeautifulSoup(requests.get(url, timeout=5).content, "html.parser")
    metadata: dict[str, dict[str, str]] = {}
    for news in soup.find_all("div", {"class": "news"}):
        link = news.find("a").get("href")
        absolute_link = urllib.parse.urljoin(url, link)
        date = news.contents[0].split("-")[0].strip()
        metadata[clean_url(absolute_link)] = {"date": date}
    return metadata


def main():
    metadata = extract_news_metadata("https://www.lpml.com.ua/новини")
    crawler = Crawler(
        "https://lpml.com.ua/",
        ".",
        excluded_saves=[
            "content/blog.md",
            "content/index.md",
            "content/blog/про-ліцей.md",
            "content/info/конкурси.md",
        ],
        metadata=metadata,
    )
    crawler.crawl()


if __name__ == "__main__":
    main()
