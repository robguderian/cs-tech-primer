Languages
=========

Learning outcomes:

At the end of this module, students will be able to:

* Understand the difference between compiled languages, and interpreted
* know how to execute both compiled languages, and interpreted.
* be able to set up a project that imports interpreted files
  from sub-folders
* understand how interpreted languages can have REPLs
* how to use a REPL to solve a problem
  * keep trying that one line of code
  * try out an idea really quickly
* know how Notebooks interact like REPLs
* `#!` to choose which interpreter to use (bash, python, other)
  * Discuss magic numbers for files

Activities
----------

* Create a python project that has circular dependencies, have the students
  fix the imports.
  Python _reads_ the files in order of import. UMLearn quiz that accepts the
  output as the 'answer'
* Have a set of libraries, have students use `python3 -i` to read the libraries,
  drop into a REPL'
* Provide a jupyter notebook with functions in the upper cells. Have students
  lego together the functions to create a result
