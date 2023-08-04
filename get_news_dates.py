#!/bin/python3.10
"""Get news articles' dates from the current lpml' site's news page.

Then put inside md files.
"""
import os

import requests
from bs4 import BeautifulSoup


SITE_NEWS_URL = "https://www.lpml.com.ua/%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8/"

def get_news_dates() -> list[tuple[str, str]]:
    """Get news articles' dates from the current lpml' site's news page.

    Returns:
        list[tuple[str, str]]: news articles' dates
    """
    response = requests.get(SITE_NEWS_URL)
    soup = BeautifulSoup(response.text, "html.parser")
    news_div = soup.find("div", class_="content")
    news = news_div.find_all("div", class_="news")
    news_dates = []
    for n in news:
        href = n.a["href"]
        name = href.replace("/новини/", "").replace("/", "")
        name = shorten_name(name)
        date = n.text
        date = date.replace("\n", "").replace("\t", "").replace(n.a.text, "")
        if date.endswith(" -"):
            date = date[:-2]
        news_dates.append((name, date))
    return news_dates

def shorten_name(name: str) -> str:
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

def add_dates_to_md_files(news_dates: list[tuple[str, str]]) -> None:
    """Add dates to md files.

    Args:
        news_dates (list[tuple[str, str]]): news articles' dates
    """
    for name, date in news_dates:
        md_file = f"./content/blog/{name}.md"
        print(f"Adding date {date} to {md_file}")
        if os.path.exists(md_file):
            with open(md_file, "r") as f:
                text = f.read()
            if not text.startswith("---"):
                text = "---\ndate: " + date + "\n---\n" + text
            else:
                yamlstart = text.find("---", 3)
                yamlend = text.find("---", yamlstart + 3)
                yaml = text[yamlstart + 3 : yamlend]
                if "date:" not in yaml:
                    text = text[:yamlend] + f"\ndate: {date}" + text[yamlend:]
            with open(md_file, "w") as f:
                f.write(text)

def main() -> None:
    """Main function."""
    news_dates = get_news_dates()
    add_dates_to_md_files(news_dates)


if __name__ == "__main__":
    main()
