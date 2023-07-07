#!/bin/python3.10
"""Turn a html file from lpml-website into a md."""
import os
import re

import click  # type: ignore
import requests

next_files: set = set()
markdownified: set = set()

TRANSLATE_LINKS = {
    "про-ліцей": "about",
    "якість-освіти": "education",
    "для-випускників": "for-grads",
    "для-ліцеїстів": "for-students",
    "публічна-інформація": "public-info",
    "вступ-до-ліцею": "for-entrants",
    "для-батьків": "for-parents",
    "колектив": "staff",
    "новини": "blog",
    "матеріали": "materials",
}
SEPARATORS = ("/", ".html", "[", "]", "(", ")", '"', "'", ".md")

INFO_DIRECTORIES = (
    "about",
    "education",
    "for-grads",
    "for-students",
    "public-info",
    "for-entrants",
    "for-parents",
    "staff",
    "materials",
)


def translate(text: str) -> str:
    """Translate a text from lpml-website to lpml-website-md.

    Args:
        text (str): The text to translate

    Returns:
        str: The translated text
    """
    for translation in TRANSLATE_LINKS.items():
        for separator_start in SEPARATORS:
            for separator_end in SEPARATORS:
                text = text.replace(
                    f"{separator_start}{translation[0]}{separator_end}",
                    f"{separator_start}{translation[1]}{separator_end}",
                )

            if text.startswith(translation[0] + separator_start):
                text = translation[1] + text[len(translation[0]) :]
            if text.endswith(separator_start + translation[0]):
                text = text[: -len(translation[0])] + translation[1]
    return text


@click.command()
@click.argument("path")
def run(path: str) -> None:
    """Turn html from lpml-website into md.

    Syntax: `./markdownify.py <Path to the file>`

    Args:
        path (str): The path to the file to be markdownified
    """
    markdownify(path)
    print(f"{next_files=}")
    print(f"{markdownified=}")
    # Markdownify all the downloaded pages too
    while next_files:
        file = next_files.pop()
        file = translate(file)
        print("MARKDOWNIFYING", file)
        if file not in markdownified:
            markdownify(file)
            markdownified.add(file)


def markdownify(path: str) -> None:
    """Turn html from lpml-website into md.

    Args:
        path (str): The path to the file to be markdownified
    """
    # Open the file in read mode
    with open(path, mode="r", encoding="utf-8") as file:
        print(f"Markdownifying {path}...")
        # Get the content between <div class="content"> and <div id="footer">
        try:
            content = get_content(file.read())
        except UnicodeDecodeError:
            with open("fails.log", "a", encoding="utf-8") as fails:
                fails.write(f"{path}\n")
            return

        # Create a class with the given html, that will convert it to markdown
        markdown = Markdownified(content, path)

        # Create a file, write the formatted text into it
        write_to_file(markdown.content, markdown.path)

        print(" ")
        print(" --- ")
        print('"' + markdown.path + '"', "markdownified")


def get_content(file: str) -> str:
    """Get the content between <div class="content"> and <div id="footer">.

    Args:
        file (str): The html file

    Returns:
        str: The content between <div id="content"> and <div id="footer">
    """
    # Find the location of content div
    location = file.find('<div id="content">')
    if location == -1:
        location = file.find('<div class="content">')
    # Find the location of the next line after that div
    content_start = file.find("\n", location, len(file))
    # Find the location of the footer
    content_end = file.find('<div id="footer">', location) - 1
    if content_end < 0:
        content_end = file.find('<div class="footer">', location) - 1
    return file[content_start:content_end]  # Return the html inbetween


def write_to_file(markdown: str, path: str) -> None:
    """Write the markdownified text to a file.

    Args:
        markdown (str): The markdownified text
        path (str): The path to the file
    """
    # Make the save path the same as the original file, but with .md
    path = path.replace(".html", ".md")
    print(f"Writing to {path}...")
    with open(path, "w", encoding="utf-8") as file:
        # Write the markdownified text to the file
        file.write(markdown)


class Markdownified:
    """Class that takes html and converts it to markdown."""

    def __init__(self, content: str, path: str) -> None:
        self.content = content
        self.path = path
        self.change_links_to_local()
        self.replace_img_in_a()
        self.replace_a()
        self.replace_img()
        for i in range(1, 7):  # replace h1, h2... h6
            self.replace_hn(i)

        # Tags and what they should be replaced with(same for opening and closing)
        # If the value is a tuple, the first value is with what to replace
        # And the second is whether to replace the closing tag too
        tags_to_replace = {
            "strong": "**",
            "b": "**",
            "i": "*",
            "em": "*",
            "div": "",
            "p": "\n\n",
            "br": "\n\n",
            "ul": "",
            "span": "",
            "small": "",
            "iframe": "",
            "li": ("- ", False),
            "ol": "",
        }
        for j in tags_to_replace.items():
            if isinstance(j[1], tuple):
                self.replace_general(j[0], j[1][0], j[1][1])
            elif isinstance(j[1], str):
                self.replace_general(j[0], j[1])

        # a dictionary of strings to replace(not only tags)
        to_replace = {
            "&nbsp;": "",
            "[Повернутися на головну](/)": "",
            "](/новини": "](/news",
        }
        for j in to_replace.items():
            self.content = self.content.replace(j[0], j[1])

        self.remove_whitespaces()

        self.replace_tables()

        self.add_blank_lines_images()
        self.add_blank_lines_tables()

        self.remove_whitespaces()

        # If there are # or - after which newlines, remove newlines
        for symbol in ("#", "-"):
            self.content = self.content.replace(f"{symbol}\n", f"{symbol} ")

        # Replace links to the translated ones(for some of info links)
        self.content = translate(self.content)

        for info_dir in INFO_DIRECTORIES:
            self.content = self.content.replace(
                f"](/{info_dir}/", f"](/info/{info_dir}/"
            )

    def replace(self, what: str, to_what: str, start: int, end: int) -> None:
        """Replace a string in self.content.

        Args:
            what (str): The string to be replaced
            to_what (str): The string to replace with
            start (int): The start of the string to be replaced
            end (int): The end of the string to be replaced
        """
        print(f"Replacing {what!r} with {to_what!r} on {start} : {end}")
        self.content = self.content[:start] + to_what + self.content[end:]

    def download(self, link: str, directory: str, name: str) -> None:
        """Download a link(a page or some media).

        Args:
            link(str): From where to download
            directory(str): Where to save
            name(str): The name of the file
        """
        if not directory.endswith("/"):
            directory += "/"
        formatted_link = requests.utils.unquote(link)  # type: ignore
        name, directory = translate(name), translate(directory)
        print(f"Downloading {formatted_link} to {directory}{name}")
        name = self.shorten_name(name)

        if os.path.exists(f"{directory}{name}"):
            print(f"File {name} already exists")
            return
        with open(f"{directory}{name}", "wb") as file:
            download_link = requests.get(link, allow_redirects=True)
            file.write(download_link.content)

    def download_file(self, link: str, file_name: str) -> str:
        """Download a file.

        Args:
            link(str): From where to download
            file_name(str): The name of the file

        Returns:
            str: The path to the directory where the file was saved
        """
        # Remove everything after ?
        if "?" in file_name:
            file_name = file_name[: file_name.find("?")]

        # If the file is an image, the directory is images_dir, else files_dir
        if file_name.split(".")[-1] in [
            "jpg",
            "png",
            "gif",
            "bmp",
            "jpeg",
            "svg",
            "webp",
        ]:
            directory = self.images_dir
            file_name = self.remove_size_of_img_in_name(file_name)
        else:
            directory = self.files_dir

        if not directory.endswith("/"):
            directory += "/"

        if directory.startswith("/images/info/.html"):
            directory = "/images/info/"
        elif directory.startswith("/files/info/.html"):
            directory = "/files/info/"
        elif directory.startswith("/images/info/"):
            directory = f"/images/info{directory[12:]}"
        elif directory.startswith("/files/info/"):
            directory = f"/files/info{directory[11:]}"

        local_dir = f"public{directory}"
        self.create_directory(local_dir)

        self.download(link, local_dir, file_name)
        return f"{directory}{file_name}"

    def shorten_name(self, name: str) -> str:
        """Shorten the name of the file.

        Args:
            name (str): The name of the file

        Returns:
            str: The shortened name
        """
        shortened_name = name
        shorten_to = 60
        if len(name) > shorten_to:
            shortened_name = name
            if "-" in name:
                extension = name[name.rfind(".") :]
                shortened_no_extension = name[: name[:shorten_to].rfind("-")]
                shortened_name = shortened_no_extension + extension
            if len(shortened_name) < shorten_to // 2 or "-" not in name:
                shortened_name = name[:shorten_to] + name[name.rfind(".") :]
            print(f"Shortened {name} to {shortened_name}")
        return shortened_name

    def create_directory(self, path: str) -> None:
        """Create a directory, if it doesn't exist.

        Args:
            path (str): The path to the directory
        """
        if not os.path.exists(path):
            print(f"Creating directory {path}")
            os.makedirs(path)

    def get_media_directories(self, path: str) -> tuple:
        """Get the directories for media.

        Args:
            path (str): The path to the file

        Returns:
            tuple: The directories for media
        """
        # Get the directory of the file
        print("PATH", path)
        path = path[path.find("/") : path.rfind("/") + 1] + os.path.basename(
            os.path.splitext(path)[0]
        )
        print("PATH", path)
        images_dir = "/images" + path
        files_dir = "/files" + path
        print("IMAGES DIR", images_dir)
        print("FILES DIR", files_dir)
        return images_dir, files_dir

    def change_links_to_local(self) -> None:
        """Change all links to files and articles.

        Change all links to files and articles on lpml.com.ua to links to local files,
        that are to be downloaded.
        """
        # Directories paths for images and files
        self.images_dir, self.files_dir = self.get_media_directories(self.path)

        # Remove links(in <a> tags) to the site, they should be local
        for i in (
            'href="https://lpml.com.ua',
            'href="https://www.lpml.com.ua',
            'src="https://lpml.com.ua',
            'src="https://www.lpml.com.ua',
        ):
            # Download the pages, markdownify it and save it
            self.content = self.content.replace(i, i[: i.find('"') + 1])

        # Cycle through "/media(here lpml.com.ua links weren't removed)
        for _ in range(self.content.count('"/media/')):
            link_start = self.content.find('"/media/') + 1
            link_end = self.content.find('"', link_start + 1)

            link = "https://lpml.com.ua" + self.content[link_start:link_end]
            file_name = os.path.basename(link)
            if "#" in file_name:
                file_name = file_name[: file_name.find("#")]

            # Replace the link with a local one
            self.replace(
                self.content[link_start - 1 : link_end + 1],
                f'"{self.download_file(link, file_name)}"',
                link_start - 1,
                link_end + 1,
            )

        print("-- Changed links to local --")

    def replace_hn(self, number: int) -> None:
        """Replace all <hn> tags(<h1>, <h2> ...) with appropriate number of #.

        Args:
            number (int): The number of the tag, for example, for <h1> it's 1,
                for <h2> it's 2
        """
        closing_h = f"</h{number}>"  # closing tags </h1>, </h2>...
        print("Removing", self.content.count(closing_h), closing_h)
        # replace closing tags
        self.content = self.content.replace(closing_h, "")

        # <tag ...> and <tag> are taken separately in order to exclude
        # sth like <br> and <b> being considered the same

        # cycle through occurrences of <hn ...>
        for _ in range(self.content.count(f"<h{number} ")):
            # get the starting point
            open_location_start = self.content.find(f"<h{number} ")
            # get the  end point
            open_location_end = self.content.find(">", open_location_start)
            self.replace(
                self.content[open_location_start : open_location_end + 1],
                "#" * number + " ",
                open_location_start,
                open_location_end + 1,
            )
            # if there's no blank line after the header, add it
            next_line = self.content.find("\n", open_location_end)
            if self.content.find("\n", next_line + 1) != next_line + 1:
                self.content = (
                    self.content[: next_line + 1] + "\n" + self.content[next_line + 1 :]
                )
            # if there's no blank line before the header, add it
            previous_line = self.content.rfind("\n", 0, open_location_start)
            if self.content.rfind("\n", 0, previous_line - 1) != previous_line - 1:
                self.content = (
                    self.content[:previous_line] + "\n" + self.content[previous_line:]
                )

        # cycle through occurrences of <hn>
        for _ in range(self.content.count(f"<h{number}>")):
            # get the starting point
            open_location_start = self.content.find(f"<h{number}>")
            # get the end point
            open_location_end = self.content.find(">", open_location_start)
            self.replace(
                self.content[open_location_start : open_location_end + 1],
                "#" * number + " ",
                open_location_start,
                open_location_end + 1,
            )
            # if there's no blank line after the header, add it
            next_line = self.content.find("\n", open_location_end)
            if self.content.find("\n", next_line + 1) != next_line + 1:
                self.content = (
                    self.content[: next_line + 1] + "\n" + self.content[next_line + 1 :]
                )
            # if there's no blank line before the header, add it
            previous_line = self.content.rfind("\n", 0, open_location_start)
            if self.content.rfind("\n", 0, previous_line - 1) != previous_line - 1:
                self.content = (
                    self.content[:previous_line] + "\n" + self.content[previous_line:]
                )

        print("-- Replaced all <h{number}> tags with appropriate number of #'s --")

    def replace_a(self) -> None:
        """Replace all links <a href=...>name</a> to markdown [name](link)."""
        # cycle through all link occurrences
        for _ in range(self.content.count("<a ")):
            # get the starting point
            open_location_start = self.content.find("<a ")
            # get the end point
            open_location_end = self.content.find(">", open_location_start)
            # get the start point of the link (the href='https://example.com' part)
            link_location_start = self.content.find("href=", open_location_start) + 6

            # If the link is located in single quotes, find single,
            # if double, then double. Get the used quotes
            quotes = self.content[link_location_start - 1]
            # Find the next quotes
            link_location_end = self.content.find(quotes, link_location_start)

            # get the starting point of the closing tag
            close_location = self.content.find("</a>", open_location_end)

            # remove all newlines between the opening and closing tags
            self.content = (
                self.content[:open_location_end]
                + self.content[open_location_end:close_location].replace("\n", "")
                + self.content[close_location:]
            )

            # get the actual link
            link = self.content[link_location_start:link_location_end]

            # recalculate the closing tag location
            close_location = self.content.find("</a>", open_location_end)

            self.replace(
                self.content[open_location_start : close_location + 4],
                f"[{self.content[open_location_end + 1:close_location]}]({link})",
                open_location_start,
                close_location + 4,
            )

            if not link.startswith("/"):
                continue
            link = "https://lpml.com.ua" + link

            # Remove the last / and everything after ?
            if "?" in link:
                file_name = link[: link.find("?")]

            if link.endswith("/"):
                link = link[:-1]

            # Get the name of the file and
            # Change all percent sign symbols(like %20) to normal symbols
            split_link = link[19:].split("/")
            file_name = requests.utils.unquote(split_link[-1])  # type: ignore
            if "#" in file_name:
                file_name = file_name[: file_name.find("#")]
            if "." in file_name and not file_name.endswith(".html"):
                self.download_file(link, file_name)
                continue
            if len(split_link) >= 3:
                directory = "html_files/" + requests.utils.unquote(  # type: ignore
                    split_link[-2]
                )
            else:
                directory = "html_files/info"

            directory += "/"
            directory = translate(directory)

            for info_dir in INFO_DIRECTORIES:
                directory = directory.replace(
                    f"html_files/{info_dir}", f"html_files/info/{info_dir}"
                )

            if not file_name.endswith(".html"):
                file_name += ".html"

            self.create_directory(directory)

            next_files.add(f"{directory}{self.shorten_name(file_name)}")
            if file_name in os.listdir(directory):
                print("File", file_name, "already exists, not downloading")
                continue

            # Download the file
            self.download(link, directory, file_name)

        print("-- Replaced all links <a href=...>name</a> to markdown [name](link) --")

    def replace_img(self) -> None:
        """Replace all images <img src=...> to markdown ![](link)."""
        # cycle through all link occurrences
        for _ in range(self.content.count("<img ")):
            # get the starting point
            open_location_start = self.content.find("<img ")
            if open_location_start == -1:
                break
            # get the end point
            open_location_end = self.content.find(">", open_location_start)
            # get the start point of the link (src='https://example.com/img.png' part)
            link_location_start = self.content.find("src", open_location_start) + 5

            # If the link is located in single quotes, find single,
            # if double, then double. Get the used quotes
            quotes = self.content[link_location_start - 1]
            # Find the next quotes
            link_location_end = self.content.find(quotes, link_location_start)

            # get the actual link
            link = self.content[link_location_start:link_location_end]

            alt_start = self.content.find("alt=", open_location_start) + 5
            if alt_start == -1:
                alt = ""
            else:
                alt_end = self.content.find(quotes, alt_start)
                alt = self.content[alt_start:alt_end]

            self.replace(
                self.content[open_location_start : open_location_end + 1],
                f"![{alt}]({link})",
                open_location_start,
                open_location_end + 1,
            )

        print("-- Replaced all <img> tags with appropriate markdown --")

    def replace_general(
        self, from_markdownify: str, to_markdownify: str, replace_end: bool = True
    ) -> None:
        """Replace a tag with a given pattern.

        Args:
            from_markdownify (str): The tag to replace
            to_markdownify (str): The pattern to replace with
            replace_end (bool, optional): Whether to replace the closing tag.
                Defaults to True.
        """
        if replace_end:
            to_replace = to_markdownify
        else:
            to_replace = ""
        closing = "</" + from_markdownify + ">"  # closing tag
        print("Replacing", self.content.count(closing), "with", closing)
        self.content = self.content.replace(closing, to_replace)  # replace closing tags

        # <tag ...> and <tag> are taken separately in order to exclude sth like
        # <br> and <b> being considered the same

        # cycle through all occurrences of <tag>
        for _ in range(self.content.count("<" + from_markdownify + ">")):
            # get the starting point
            open_location_start = self.content.find("<" + from_markdownify + ">")
            # get the  end point
            open_location_end = self.content.find(">", open_location_start)
            # Also replace spaces after the tag opening
            while self.content[open_location_end + 1] == " ":
                open_location_end += 1
            self.replace(
                self.content[open_location_start : open_location_end + 1],
                to_markdownify,
                open_location_start,
                open_location_end + 1,
            )

        # cycle through all occurrences of <tag ...>
        for _ in range(self.content.count("<" + from_markdownify + " ")):
            # get the starting point
            open_location_start = self.content.find("<" + from_markdownify + " ")
            # get the  end point
            open_location_end = self.content.find(">", open_location_start)
            # Also replace spaces after the tag opening
            content_length = len(self.content)
            while self.content[open_location_end + 1] == " ":
                open_location_end += 1
                if open_location_end == content_length - 1:
                    break
            self.replace(
                self.content[open_location_start : open_location_end + 1],
                to_markdownify,
                open_location_start,
                open_location_end + 1,
            )

        print("-- Replaced all", from_markdownify, "with", to_markdownify, " --")

    def replace_tables(self) -> None:
        """Replace all tables <table>...</table> to markdown."""
        # cycle through all occurrences of <table>
        for _ in range(self.content.count("<table")):
            # get the starting point
            open_location_start = self.content.find("<table")
            # get the  end point
            open_location_end = self.content.find(">", open_location_start)
            # get the end point of the table
            close_location = self.content.find("</table>", open_location_start)

            # get the table
            table = self.content[open_location_end + 1 : close_location]

            # get the table rows
            rows = table.split("</tr>")

            # get the table headers
            headers_unflattened = [
                header.split("</td>") for header in rows[0].split("</th>")
            ]
            headers = [header for sublist in headers_unflattened for header in sublist]
            # If a header has colspan, make an empty header on the right
            i = 0
            while i < len(headers):
                header = headers[i]
                if "colspan" in header:
                    # Get the number of columns to skip
                    skip = int(header[header.find("colspan=") + 9])
                    # Add empty headers
                    headers = headers[: i + 1] + [""] * (skip - 1) + headers[i + 1 :]
                i += 1
            headers = [header[header.find(">") + 1 :] for header in headers]
            # Remove newlines from headers
            headers = [header.replace("\n", "") for header in headers]
            # If the last header is empty, remove it
            if headers[-1] == "":
                headers = headers[:-1]

            # get the table data
            data_unsplit = [row.split("</td>") for row in rows[1:]]
            # also split by </th>
            data_unflattened = [
                [cell.split("</th>") for cell in row] for row in data_unsplit
            ]
            # flatten the 3-level list into 2-level
            data = [
                [cell for sublist in row for cell in sublist]
                for row in data_unflattened
            ]
            # Remove newlines from data
            data = [[cell.replace("\n", "") for cell in row] for row in data]
            # If a cell has colspan, make an empty cell on the right
            i = 0
            while i < len(data):
                j = 0
                while j < len(data[i]):
                    cell = data[i][j]
                    if "colspan" in cell:
                        # Get the number of columns to skip
                        skip = int(cell[cell.find("colspan=") + 9])
                        # Add empty cells
                        data[i] = (
                            data[i][: j + 1] + [""] * (skip - 1) + data[i][j + 1 :]
                        )
                    j += 1
                i += 1

            for i, row in enumerate(data):
                for j, cell in enumerate(row):
                    if "rowspan" in cell:
                        # Get the number of rows to skip
                        skip = int(cell[cell.find("rowspan=") + 9])
                        # Add empty cells
                        for k in range(1, skip):
                            data[i + k].insert(j, "")
            data = [
                [cell[cell.find(">") + 1 :] for cell in row] for row in data
            ]  # noqa
            # If the last row is empty, remove it
            if data[-1] == [""]:
                data.pop()
            # If the last column is empty, remove it
            if all(i[-1] == "" for i in data):
                data = [row[:-1] for row in data]

            # Remove all remaining tags from the headers
            for i, header in enumerate(headers):
                while "<" in header:
                    start = header.find("<")
                    end = header.find(">")
                    header = header[:start] + header[end + 1 :]
                headers[i] = header
            # Remove all remaining tags from the data
            for i, row in enumerate(data):
                for j, cell in enumerate(row):
                    while "<" in cell:
                        start = cell.find("<")
                        end = cell.find(">")
                        cell = cell[:start] + cell[end + 1 :]
                    data[i][j] = cell
            # Make all cells of the column the same length
            # Get the length of the longest cell in each column
            lengths = [
                max(max(len(cell) for cell in column), 3)
                for column in zip(*data, headers)
            ]
            # Make all cells the same length
            data = [
                [
                    f"{cell:^{lengths[j]}}" if len(lengths) > j else cell
                    for j, cell in enumerate(row)
                ]
                for row in data
            ]
            headers = [
                f"{header:^{lengths[j]}}" if len(lengths) > j else header
                for j, header in enumerate(headers)
            ]

            # create the markdown table
            markdown_table = "| " + " | ".join(headers) + " |\n"
            markdown_table += "| " + " | ".join(["-" * length for length in lengths])
            markdown_table += " |\n"
            for row in data:
                markdown_table += "| " + " | ".join(row) + " |\n"

            # replace the table with the markdown table
            self.replace(
                self.content[open_location_start : close_location + 8],
                markdown_table,
                open_location_start,
                close_location + 8,
            )

        self.remove_whitespaces()
        # Remove remaining tr, td, th tags
        self.replace_general("tr", "")
        self.replace_general("td", "")
        self.replace_general("th", "")
        self.remove_whitespaces()
        print("-- Replaced all tables with markdown tables --")

    def add_blank_lines_images(self) -> None:
        """Add blank lines before and after images."""
        # add blank lines before and after images
        self.content = re.sub(r"!\[.*\]\(.*images.*\)", "\n\n\\g<0>\n\n", self.content)

    def add_blank_lines_tables(self) -> None:
        """Add blank lines before and after tables."""
        # as tables are multiline, go line by line until a table is found
        # Add blank line before, go until the table ends. Add blank line after.
        lines = self.content.splitlines()
        in_table = False
        for i, line in enumerate(lines):
            if not (line.startswith("|") and line.endswith("|")):
                if in_table:
                    lines[i] = line + "\n"
                    in_table = False
                continue
            if not in_table:
                lines[i] = "\n" + line
                in_table = True
        self.content = "\n".join(lines)

    def remove_whitespaces(self) -> None:
        """Remove whitespaces from the lines."""
        # strip the lines
        for line in self.content.splitlines():
            self.content = self.content.replace(line, line.strip(), 1)
        while "\n\n\n" in self.content:
            self.content = self.content.replace("\n\n\n", "\n\n")
        if self.content.startswith("\n"):
            self.content = self.content[1:]

        print("-- Removed whitespaces --")

    def replace_img_in_a(self) -> None:
        """When there is an image inside a link to this image, leave just the image."""
        # Replace something like ..._500x250.jpg with ....jpg
        self.content = self.remove_size_of_img_in_name(self.content)

        # With alt=...
        self.content = re.sub(
            r"<a .*?href *= *([\"'])(.*?)\1.*?> *<img .*?src *= *([\"'])\2\3.*?( alt *= *\".*?\").*?>.*?<\/a>",
            r'<img src="\2"\4>',
            self.content,
        )
        # Without alt=...
        self.content = re.sub(
            r"<a .*?href *= *([\"'])(.*?)\1.*?> *<img .*?src *= *([\"'])\2\3.*?>.*?<\/a>",
            r'<img src="\2">',
            self.content,
        )

    def remove_size_of_img_in_name(self, text: str) -> str:
        """Replace something like ..._500x250.jpg with ....jpg.

        Args:
            text (str): The text to replace in.

        Returns:
            str: The replaced text.
        """
        return re.sub(
            r"([^\"']*)_\d+x\d+\.(jpg|png|gif|jpeg|bmp|svg|webp)",
            r"\1.\2",
            text,
        )


if __name__ == "__main__":
    run()
