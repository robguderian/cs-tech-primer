% Python for people who have programmed before
% Robert Guderian

Syntax, usage, debugging

# I mean, what else?

<aside class="notes">
Do a Hello world.

Note there is no main function

Run one in vsCode, one in an ssh session
</aside>

![](images/hello.jpg){.big-img}

# Octothorpe!

<aside class="notes">
Can now make the script executable,
tells the system which binary to use to run this script
</aside>

```python
#!/usr/bin/python
```

aka `shebang`

# Blocks

```python
if not aThing and 10 > x:
  # ends when we stop the indent
  print("In it")
  print('also single quotes work')
print('done the if')
```

# `if`/`elif`/`else`

```python
if (x < 9):
  print("this one")
elif (x < 42):
  print("other one")
else:
  print("The last one")
```

# Data structures

No arrays, everything is a list, [has functions](https://docs.python.org/3/tutorial/datastructures.html)

```python
list1 = []
list2 = [1, 2, "pants"]
list1.append(42)
print(list1)
print(list2)
```

# Tables for free

<aside class="notes">
keys can be anything serializable. Values can be nearly anything.
</aside>

[Totally nuts](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) key/value pair table (hash)

```python
dict1 = {}
dict1['key'] = "whatever"
dict2 = {"key matter": 42, "other": "mixed data"}
```

# Loops

`while` is what you expect

```python
something = 0
while something > 10:
  # oh yeah... ++ doesn't work
  something += 1
```

# `for` is a mess

`for` is an iterator

```python
aList = [1,2,3,100,1000]
for anItem in aList:
    print(anItem)
```

Works for `dict`s, `set`s, and a lot of other things.

# `for`-like

To recreate C/Java `for`...

```python
for i in range(20):
  print(i)
```

# `file`-like objects

Sockets, files, and other devices that are read/write are [file-like objects](https://docs.python.org/3/glossary.html#term-file-object)

We get `read`, `write`, and sometimes `seek`.

# Open a text file

```python
# uses relative paths to where python was invoked
aFile = open('best_file.txt', 'r')
theText = aFile.read()
```

# line-by-line

With some [string format](https://pyformat.info/)

```python
# uses relative paths to where python was invoked
aFile = open('best_file.txt', 'r')
lineNumber = 0
for line in aFile:
  print("line %d: %s".format(lineNumber, line))
  lineNumber += 1
```

# Standard in is a file-like object

```python
import sys
# with closes resources for us at the end of the block
# sys.stdin is a file-like object
with sys.stdin as inStream:
  # wait for a line
  line = inStream.readline()
print(line)
```

# Functions

<aside class="notes">
Can also call the parameters by name

Can set default values with =

scope is a mess
</aside>

```python
def aFunctionName(parameters, goHere):
  print("first one " + parameter)
  print("second one " + goHere)
  return 1

theRetValue = aFunctionName("in", "order")
```

# Objects

<aside class="notes">
Scope controlled by `self`. Must be the first paramter
</aside>

```python
class GreatClass:
  def __init__(self): # the constructor
    name = "Samwise"
    age = 31

  def addAge(self, amount):
    self.age += amount
```

# Typing an untyped language

We can set the types for arguments, and return types (new in 3.5).
[see the docs](https://docs.python.org/3/library/typing.html)

```python
def function(aNumber: int, aString:str) -> str:
  '''
  Add the number to the back of the string
  '''
  return aString + " " + str(aNumber)
```

[Not actually enforce, just for 'hints']{.fragment}

# `pdb`

`import pdb; pdb.set_trace()`

You drop into a `gdb`-like session.

#

![](images/stinger.jpg){.big-img}
