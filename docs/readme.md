
University of Manitoba CS Topics Primer
=======================================

Stuff that is CS... but not CS? Let's talk about the ecosystem *around*
programming, and how to do CS **well**. In university, we talk about
*programming* and we talk about *algorithms*, but we often don't talk about
all the tooling that is available *around* programming these algorithms.

Inspired by [MIT's missing semester](https://missing.csail.mit.edu/), a toolkit for
students to train students in hard tech skills that will help them succeed.
We've seen 3rd year students in Operating Systems, Real Time Systems, and other
technical courses struggle to use the tools - stumbling with the tools rather than
focusing on the assignment at hand.

The welcome video:

<iframe width="560" height="315"
src="https://www.youtube.com/embed/Q2AEZqczbvY"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen>
</iframe>

Topics
------

* [Different types of languages, ways of interacting](1_languages)
  * Compilation
  * Scripting
  * REPL
    * Why REPL is great
    * When is it useful
* [Shell](2_shell)
  * using a shell _Well_
  * [unix program structure](2_shell/piping.md)
    * Standard in, standard out, standard error
    * piping, file redirection, how that relates to stdin/stdout/stderr
    * output redirection
  * create a bash script to automate something
    * See bash/shell as a scripting language, not just a window
  * [Environment variables to choose resources](./2_shell/environment_variables.md)
  * [Remote systems](2_shell/remote.md)
    * ssh
    * moving files
      * To the system
      * From the system (No, you can't push home)
  * [Getting around quickly, and pitfalls](2_shell/advanced_shell.md)
* [Reading manual pages](3_reading_man_pages/readme.md)
  * Read man pages
  * understand SYNOPSIS syntax
  * search them on the command line
* [Quality code](4_quality_code)
  * Linters, style checkers
  * adding these to makefiles/tests
  * profiling - finding slow parts in code
* [Debugging](5_debugging)
  * Why it's better than print statements
  * anti-pattern debugging
  * gdb/pdb breakpoints, stepping stack traces
  * some guis
    * intro this. these change all the time
* [Useful Unix Tools](6_unix)
  * linux vs unix vs mac
  * tools
    * `awk` (alternatively `cut`)
    * `find` done properly
    * `sed`
    * `xargs`
  * wrap with processing a csv/tsv file
* [Building programs](7_building)
  * Makefiles
  * Library paths?
* [Virtual machines](8_virtualization)
  * What are they?
  * Why should we use them?
* [Source code control](9_versioning_code)
  * Git!
  * Creating a repository
  * Add, check-in, revert
  * make a branch, merge, or abandon
  * Collisions with yourself (or as a team)
* [Maintaining Servers](10_maintaining_servers/readme.md)
* The rest
  * things that don't fit into here, and also don't fit into
    the program, either.

The above are general UNIX/linux and meta-programming topics.
But, what if you need to learn a new programming language?

Check out the [Hello world in 14(ish) languages](language_bootcamp), where
we have how to compile (if it's a compiled language), run, debug, and discuss
best practices in a bunch of common languages!

Possible topics
---------------

Connecting software to tools:

* How do we connect to databases?
* Using REST APIs?
* File encodings, character sets (ascii/unicode. CRLF/LF). converting
  between the two
* Virtual environments (python/ruby) for isolation lite(tm)
* CPU vs GPU vs ALU
* Concurrency basics
* Blockchain intro, discussion about contracts (solidity)

Outputs
-------

Videos covering this material _on our infrastructure_. Students
can see this material anywhere, but we can make it real to them here.

UMLearn course, where badges are released. Some "challenges" where the
answer can be put into a UMLearn quiz (or similar). Open to all 2nd-grad level
students in CS.

Book suggestions
-----------------

For myself to use, and for the students.

* [The Linux Command Line](https://linuxcommand.org/tlcl.php)
* [Unix power tools](https://www.amazon.ca/Unix-Power-Tools-Jerry-Peek/dp/0596003307)
* [Unix programming environment](https://www.amazon.ca/UNIX-Programming-Environment-KERNIGHAN-PIKE/dp/013937681X/ref=pd_sim_3/143-8981586-4934920)
