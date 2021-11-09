CS tech primer
=============

Visit the [actual rendered site](https://robguderian.github.io/cs-tech-primer/)!

Course content is all under [docs](./docs/readme.md). Be sure to read
the [readme there](docs/readme.md). That folder is the one
published to UMLearn.

Adminstration, and other meta documentation can go in folders off
this root folder.

Building
--------

Requires [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)
for checking markdown style.

* Mac: `brew install markdownlint-cli`
* Linux: TODO (Rob doesn't currently have an x86 linux image)
* Either via npm: `npm install -g markdownlint-cli`

Markdown linting can be invoked with `make style`

View site locally
-----------------

github.io uses Jekyll to render the markdown pages. Run locally with
bundle:

```sh
bundle update
bundle install
bundle exec jekyll serve
```

See Jekyll install documentation, and running with bundle
[here](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/).

Making nice charts
------------------

For text ones, use [asciiflow](https://asciiflow.com/#/).

For Visio-style charts, use [diagrams.net](https://app.diagrams.net/).

Committing
----------

Be sure that `make style` is not complaining about any errors
in your markdown documents.
