Products database
==================

This is a database created by [James Tully](https://github.com/MagikEh),
with "As seen on TV products" data from
[As Seen On TV US](http://www.asseenontvus.com) amd
[As Seen On TV Video](https://www.asseenontvvideo.com/all-products-a-z.html).

Some users and tax information has been added for use in databases
classes, allowing for "who bought what" queries, and queries that
total up orders, total spent, etc.

The SQL flavour is [SQLite](https://www.sqlite.org/index.html), and
can be read in with `sqlite3 --init products.sql`.

Parts of the data has also been presented as a tab-separated file that
can be used for some data processing.

How?

```txt
$ sqlite3 --init products.sql
sqlite> .mode list
sqlite> .separator \t \n
sqlite> .output products.tsv
sqlite> select * from products;
sqlite> .q
```

There's probably a one-liner to do it. 🤷‍♂️
