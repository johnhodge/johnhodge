import datetime

# Configuration file for the Sphinx documentation builder.

intersphinx_mapping = {
    "python": ("https://docs.python.org/3/", None),
    "sphinx": ("https://www.sphinx-doc.org/en/master/", None),
}
intersphinx_disabled_domains = ["std"]

# -- Project information

project = "John Hodge"
copyright = f"{datetime.date.today().year}, John Hodge"
author = "John Hodge"
version = "0.1.0"
release = "0.1"

# -- General configuration

extensions = [
    "sphinx.ext.duration",
    "sphinx.ext.doctest",
    "sphinx.ext.autodoc",
    "sphinx.ext.autosummary",
    "sphinx.ext.intersphinx",
]
templates_path = ["_templates"]
numfig = True
highlight_language = "ts"
show_authors = True


# -- Options for HTML output

html_theme = "sphinx_material"
html_show_sphinx = False
html_title = "John Hodge"
html_favicon = "./favicon.ico"
html_show_sourcelink = True
html_sidebars = {
    "**": ["logo-text.html", "globaltoc.html", "localtoc.html", "searchbox.html"]
}
html_theme_options = {
    "base_url": "https://docs.johnhodge.com",
    "repo_url": "https://github.com/johnhodge/johnhodge",
    "repo_name": "John Hodge",
    "google_analytics_account": "G-HC0Q5KHV3C",
    "html_minify": False,
    "html_prettify": True,
    "css_minify": True,
    "repo_type": "github",
    "globaltoc_depth": 2,
    "color_primary": "white",
    "color_accent": "deep-orange",
    "touch_icon": "./logo.png",
    "theme_color": "2196f3",
    "master_doc": False,
    "nav_links": [
        {"href": "index", "internal": True, "title": "Tech doc home"},
        {
            "href": "https://www.johnhodge.com",
            "internal": False,
            "title": "John's website",
        },
    ],
    "heroes": {
        "index": "Docs for the technology powering johnhodge.com.",
        "images": "Dynamic image loading with Contentful.",
    },
    "version_dropdown": True,
}
# -- Options for EPUB output
epub_show_urls = "footnote"
