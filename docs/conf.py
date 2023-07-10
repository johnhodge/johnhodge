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
primary_domain = "ts"
numfig = True
highlight_language = "ts"
show_authors = True


# -- Options for HTML output

html_theme = "sphinx_material"
html_show_sphinx = False
html_title = "John Hodge"
html_favicon = "./favicon.ico"
html_sidebars = {
    "**": ["globaltoc.html", "sourcelink.html", "searchbox.html"],
    "using/windows": ["windowssidebar.html", "searchbox.html"],
}
html_theme_options = {
    "base_url": "http://bashtage.github.io/sphinx-material/",
    "repo_url": "https://github.com/bashtage/sphinx-material/",
    "repo_name": "Material for Sphinx",
    "google_analytics_account": "UA-XXXXX",
    "html_minify": True,
    "css_minify": True,
    "nav_title": "Material Sphinx Demo",
    "logo_icon": "&#xe869",
    "globaltoc_depth": 2,
}
# -- Options for EPUB output
epub_show_urls = "footnote"
