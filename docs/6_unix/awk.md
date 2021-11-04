AWK
===

Named after the authors: Aho, Weinberger, and  Kernighan, it is an
**entire programming language** that is for processing streams of text.

But wait.... we have [sed](./sed.md), so how is this different?

Running `awk`
-------------

The focus is on data that is in columns, and handling data  that is in a
structured format.

It can accept data via standard in (which is what wil be shown here, as a way
to reinforce how piping works), or by providing a file name as the last
argument.

Makin' columnns
---------------

When streaming data, we generally stream text. In well-formatted/structured
data, we often have Comma-separated values (CSV files), or
tab-separated files (TSV), or sometimes more arcane ascii marks
such as `|` pipes, `~` tilde, or others.

And to us... it really doesn't matter. We just have to know what the delimiter
is before we parse a file.

In the products dataset, there's a tsv version of the data.

```sh
$ head products.tsv 
productID	price	prodName
1	24.99	1 Second Slicer
2	92.85	10-Minute Trainer From Tony Horton
3	74.85	21 Day Fix Extreme
4	72.82	21 Day Fix Fitness and Weight Loss Program
5	99.79	22 Minute Hard Corps Workout
6	14.95	3 Minute Legs
7	72.82	3 Week Yoga Retreat – Now on DVD
8	14.95	30 Second Smile
9	19.99	35 Below Compression Socks – Compression & Warming Socks
```

"But that doesn't line up", yes. Tabs move to tab stops. It's not supposed
to line up. The spaces between are tab characters... and that's it!

Ok, print out the 3rd column
-----------------------------

```sh
$ cat products.tsv | awk '{ print $3 }' | head
prodName
1
10-Minute
21
21
22
3
3
30
35
```

That's the first word of the products column. We need to set the field
separator.

```sh
$ cat products.tsv | awk --field-separator='\t' '{print $3}' | head
prodName
1 Second Slicer
10-Minute Trainer From Tony Horton
21 Day Fix Extreme
21 Day Fix Fitness and Weight Loss Program
22 Minute Hard Corps Workout
3 Minute Legs
3 Week Yoga Retreat – Now on DVD
30 Second Smile
35 Below Compression Socks – Compression & Warming Socks
```

Which also presents itself as the `FS` variable, and we can set variables
with the `-v` flag:

```sh
cat products.tsv | awk -v FS='\t' '{print $3}' | head
```

Other cool stuff it can do
--------------------------

Think about what simple things you might want to do with Excel...
find maximums, minimums, sum a column...

Sum a column
------------

`cat products.tsv | awk -F'\t' '{sum+=$2;} END{print sum;}'`

Actually not bad!

A whole language
----------------

This is a SUPER light introduction to `awk`. It is it's own whole language,
and is very feature-full.

Consider
[taking a look at the documentation](https://www.gnu.org/software/gawk/manual/gawk.html),
or
[Unix Power Tools](https://www.oreilly.com/library/view/unix-power-tools/0596003307/)
has a very good introduction, too.

Activities
----------

Convert `products.tsv` to a `csv` file.
