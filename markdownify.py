#!/bin/python3.10
"""
Turn a html file from lpml-website into a md
"""
import os

import click
import requests

next_files = set()
markdownified = set()


@click.command()
@click.argument("path")
def run(path: str):
    """
    Turn html from lpml-website into md

    Syntax: `./markdownify.py <Path to the file>`
    """
    markdownify(path)
    print(f"{next_files=}")
    print(f"{markdownified=}")
    # Markdownify all the downloaded pages too
    while next_files:
        file = next_files.pop()
        if file not in markdownified:
            markdownify(file)
            markdownified.add(file)


def markdownify(path: str):
    """
    Turn html from lpml-website into md

    Parameters
    ----------
    path : str
        The path to the file to be markdownified
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

        # Create a class with the given html, that will convert it to markdown
        markdown = Markdownified(content, path)

        # Create a file, write the formatted text into it
        write_to_file(markdown.content, markdown.path)

        print(" ")
        print(" --- ")
        print('"' + markdown.path + '"', "markdownified")


def get_content(file: str) -> str:
    """
    Get the content between <div class="content"> and <div id="footer">

    Parameters
    ----------
    file : str

    Returns
    -------
    str
        The content between <div id="content"> and <div id="footer">
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


def write_to_file(markdown: str, path: str):
    """
    Write the markdownified text to a file

    Parameters
    ----------
    markdown : str
        The markdownified text

    path : str
        The path to the file
    """
    # Make the save path the same as the original file, but with .md
    path = path.replace(".html", ".md")
    print(f"Writing to {path}...")
    with open(path, "w", encoding="utf-8") as file:
        # Write the markdownified text to the file
        file.write(markdown)


class Markdownified:
    """
    Class that takes html and converts it to markdown
    """

    def __init__(self, content: str, path: str):
        self.content = content
        self.path = path
        self.change_links_to_local()
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
            "p": "",
            "br": "\n",
            "ul": "",
            "span": "",
            "small": "",
            "iframe": "",
            "li": ("- ", False),
            "ol": "",
        }
        for i in tags_to_replace.items():
            if isinstance(i[1], tuple):
                self.replace_general(i[0], i[1][0], i[1][1])
            else:
                self.replace_general(i[0], i[1])

        # a dictionary of strings to replace(not only tags)
        to_replace = {
            "&nbsp;": "",
            "[Повернутися на головну](/)": "",
            "](/новини": "](/news",
        }
        for i in to_replace.items():
            self.content = self.content.replace(i[0], i[1])

        self.remove_whitespaces()

        self.replace_tables()

        # If there are # or - after which newlines, remove newlines
        for i in ("#", "-"):
            self.content = self.content.replace(f"{i}\n", f"{i} ")

    def replace(self, what: str, to_what: str, start: int, end: int):
        """
        Replace a string in self.content

        Parameters
        ----------
        what : str
            The string to be replaced

        to_what : str
            The string to replace with

        start : int
            The start of the string to be replaced

        end : int
            The end of the string to be replaced
        """
        print(f"Replacing {what!r} with {to_what!r} on {start} : {end}")
        self.content = self.content[:start] + to_what + self.content[end:]

    def download(self, link: str, directory: str, name: str):
        """
        Download a link(a page or some media)

        Parameters
        ----------
        link: str
            From where to download

        directory: str
            Where to save

        name: str
            The name of the file
        """
        formatted_link = requests.utils.unquote(link)
        print(f"Downloading {formatted_link} to {directory}/{name}")
        name = self.shorten_name(name)

        if os.path.exists(f"{directory}/{name}"):
            print(f"File {name} already exists")
            return
        with open(f"{directory}/{name}", "wb") as file:
            link = requests.get(link, allow_redirects=True)
            file.write(link.content)

    def download_file(self, link: str, file_name: str) -> str:
        """
        Download a file

        Parameters
        ----------
        link: str
            From where to download

        file_name: str
            The name of the file

        Returns
        -------
        str
            The path to the directory where the file was saved
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
        else:
            directory = self.files_dir

        local_dir = f"public{directory}"
        self.create_directory(local_dir)

        self.download(link, local_dir, file_name)
        return f"{directory}/{file_name}"

    def shorten_name(self, name: str) -> str:
        """
        Shorten the name of the file

        Parameters
        ----------
        name : str
            The name of the file

        Returns
        -------
        str
            The shortened name
        """
        SHORTEN_TO = 60
        if len(name) > SHORTEN_TO:
            shortened_name = name
            if "-" in name:
                shortened_name = (
                    name[: name[:SHORTEN_TO].rfind("-")] + name[name.rfind(".") :]
                )
            if len(shortened_name) < SHORTEN_TO // 2 or "-" not in name:
                shortened_name = name[:SHORTEN_TO] + name[name.rfind(".") :]
            print(f"Shortened {name} to {shortened_name}")
            name = shortened_name
        return name

    def create_directory(self, path: str):
        """
        Create a directory, if it doesn't exist

        Parameters
        ----------
        path : str
            The path to the directory
        """
        if not os.path.exists(path):
            print(f"Creating directory {path}")
            os.makedirs(path)

    def get_media_directories(self, path: str) -> tuple:
        """
        Get the directories for media

        Parameters
        ----------
        path : str
            The path to the file

        Returns
        -------
        tuple
            The directories for media
        """
        # Get the directory of the file
        images_dir = "/images/" + os.path.basename(os.path.splitext(self.path)[0])
        files_dir = "/files/" + os.path.basename(os.path.splitext(self.path)[0])
        return images_dir, files_dir

    def change_links_to_local(self):
        """
        Change all links to files and articles on lpml.com.ua
        to links to local files, that are to be downloaded
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

            # Replace the link with a local one
            self.replace(
                self.content[link_start - 1 : link_end + 1],
                f'"{self.download_file(link, file_name)}"',
                link_start - 1,
                link_end + 1,
            )

        print("-- Changed links to local --")

    def replace_hn(self, number: int):
        """
        Replace all <hn> tags(<h1>, <h2> ...) with appropriate number of #

        Parameters
        ----------
        number : int
            The number of the tag, for example, for <h1> it's 1, for <h2> it's 2
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

        print("-- Replaced all <h{number}> tags with appropriate number of #'s --")

    def replace_a(self):
        """Replace all links <a href=...>name</a> to markdown [name](link)"""
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

            # get the actual link
            link = self.content[link_location_start:link_location_end]

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
            file_name = requests.utils.unquote(split_link[-1])
            if "." in file_name and not file_name.endswith(".html"):
                self.download_file(link, file_name)
                continue
            if "#" in file_name:
                file_name = file_name[: file_name.find("#")]
            if len(split_link) >= 3:
                directory = "html_files/" + requests.utils.unquote(split_link[-2])
            else:
                directory = "html_files/index"

            self.create_directory(directory)

            if not file_name.endswith(".html"):
                file_name += ".html"

            next_files.add(f"{directory}/{self.shorten_name(file_name)}")
            if file_name in os.listdir(directory):
                print("File", file_name, "already exists, not downloading")
                continue

            # Download the file
            self.download(link, directory, file_name)

        print("-- Replaced all links <a href=...>name</a> to markdown [name](link) --")

    def replace_img(self):
        """Replace all images <img src=...> to markdown ![](link)"""
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
    ):
        """
        Replace a tag with a given pattern

        Parameters
        ----------
        from_markdownify : str
            The tag to replace

        to_markdownify : str
            The pattern to replace with
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
            self.replace(
                self.content[open_location_start : open_location_end + 1],
                to_markdownify,
                open_location_start,
                open_location_end + 1,
            )

        # cycle through all occurrences of <tag>
        for _ in range(self.content.count("<" + from_markdownify + " ")):
            # get the starting point
            open_location_start = self.content.find("<" + from_markdownify + " ")
            # get the  end point
            open_location_end = self.content.find(">", open_location_start)
            self.replace(
                self.content[open_location_start : open_location_end + 1],
                to_markdownify,
                open_location_start,
                open_location_end + 1,
            )

        print("-- Replaced all", from_markdownify, "with", to_markdownify, " --")

    def replace_tables(self):
        """
        Replace all tables <table>...</table> to markdown
        """
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
            headers = rows[0].split("</th>")
            headers = [header.split("</td>") for header in headers]
            headers = [header for sublist in headers for header in sublist]
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
            data = [row.split("</td>") for row in rows[1:]]
            # also split by </th>
            data = [[cell.split("</th>") for cell in row] for row in data]
            # flatten the 3-level list into 2-level
            data = [[cell for sublist in row for cell in sublist] for row in data]
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
            data = [[cell[cell.find(">") + 1 :] for cell in row] for row in data]
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

    def remove_whitespaces(self):
        """Remove whitespaces from the lines"""
        # strip the lines
        for line in self.content.splitlines():
            self.content = self.content.replace(line, line.strip(), 1)
        self.content = self.content.replace("\n\n", "\n")
        if self.content.startswith("\n"):
            self.content = self.content[1:]

        print("-- Removed whitespaces --")


if __name__ == "__main__":
    run()
