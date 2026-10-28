"""Check the deployable files with the Python standard library only."""
from html.parser import HTMLParser
from pathlib import Path
import re
import unittest
from urllib.parse import unquote, urlsplit

SITE = Path(__file__).resolve().parents[1] / "site"


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.tags = []
        self.ids = set()
        self.urls = []
        self.feed(html)

    def handle_starttag(self, tag, attributes):
        self.tags.append(tag)
        attrs = dict(attributes)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        for key in ("src", "href"):
            if key in attrs:
                self.urls.append(attrs[key])


class StaticSiteTests(unittest.TestCase):
    def setUp(self):
        self.html = (SITE / "index.html").read_text()
        self.page = Page(self.html)

    def test_no_application_runtime(self):
        self.assertNotIn("script", self.page.tags)
        self.assertNotIn("_next", self.html)
        self.assertNotIn(".js", self.html)
        for product in ("MacBasic", "PupPad", "ScoreComposer", "SalonSync", "ScrubBit", "ClockAndLedger"):
            self.assertIn(product, self.html)
        self.assertTrue((SITE / ".nojekyll").exists())

    def test_relative_assets_and_navigation(self):
        for url in self.page.urls:
            parsed = urlsplit(url)
            if parsed.scheme:
                continue
            self.assertFalse(url.startswith("/"), url)
            if parsed.fragment:
                self.assertIn(parsed.fragment, self.page.ids)
            if parsed.path and not parsed.path.startswith("downloads/"):
                self.assertTrue((SITE / unquote(parsed.path)).is_file(), url)
        css = (SITE / "styles.css").read_text()
        for font in re.findall(r"url\(([^)]+)\)", css):
            self.assertFalse(font.startswith("/"), font)
            self.assertTrue((SITE / font).is_file(), font)

    def test_support_and_contact(self):
        self.assertIn("support", self.page.ids)
        self.assertIn("#support", self.page.urls)
        self.assertIn("mailto:greg.casamento@gmail.com", self.page.urls)
        for product in ("MacBasic", "PupPad", "ScoreComposer", "SalonSync", "ScrubBit", "ClockAndLedger"):
            self.assertIn(
                f"mailto:greg.casamento@gmail.com?subject={product}%20support",
                self.page.urls,
            )


if __name__ == "__main__":
    unittest.main()
