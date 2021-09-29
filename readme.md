CS tech primer
=============

Course content is all under [docs]. Be sure to read
the [readme there][docs/readme.md]. That folder is the one
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

Commiting
---------

Be sure that `make style` is not complaining about any errors
in your markdown documents.
