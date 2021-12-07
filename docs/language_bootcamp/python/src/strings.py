
# strings are rediculously simple in python

# searching, two ways
# find returns a -1 if it's not there
from string import ascii_lowercase
myWord = "humuhumunukunukuapuaa"
print(myWord.find("kun"))
print(myWord.find("Fish"))

# index throws an exception if it's not there
print(myWord.index("kun"))
try:
    print(myWord.index("Fish"))
except ValueError:
    print("nope")


# Substring, and palindromes in one
# We can define functions at any time, they just need to be
# read in before we use them
# Though, generally it is an anti-pattern to pepper them in anywhere
# This is here to keep the example tight
def pal(theString: str) -> bool:
    if len(theString) <= 1:
        return True
    # check it
    # -1 index is the last character!
    if theString[0] == theString[-1]:
        # We can pull substrings by slicing
        return theString[1:-1]
    # failed!
    return False


def palBootStrap(theWord: str) -> None:
    if pal(theWord):
        print(theWord + ' is a palendrome')
    else:
        print(theWord + ' is not a palendrome')


palBootStrap('wow')
palBootStrap('dog')
palBootStrap('radar')
palBootStrap('tacocat')

# split is trivial
# splits on all whitespace by default
print("This is a sentence".split())
# or we can feed it what to split on
print(myWord.split('u'))

# Rock you problems
# as a reminder:
#  how many passwords have the word 'pass' in it?
#  see if you've been owned
#  count letter frequencies
#  how many palindromes are there in the corpus

# We can do all of these in one loop.
# open the file, loop through it, line-by-line

# initialize the tracking variables
letters = {}
for character in ascii_lowercase:
    letters[character] = 0
hasPassInName = 0
palindromeCount = 0

# get a password to look up
myPassword = input("Which password to look up? > ")
owned = False

with open('../../../../../resources/passwords/rockyou.txt') as passwds:
    for line in passwds:
        line = line.strip()  # clean off newline character

        # count the letters. Iterate the word.
        lowered = line.lower()
        for letter in lowered:
            if letter in letters:
                letters[letter] += 1

        # does it have the word 'pass' in it?
        if lowered.find('pass') >= 0:
            hasPassInName += 1

        # is it palindrome?
        if pal(lowered):
            palindromeCount += 1


print("letter frequencies:")
print(letters)

print("There are {} password with 'pass' in them".format(hasPassInName))
print("There are {} palindromes".format(palindromeCount))

if owned:
    print("Your password is in the list")
else:
    print("Safe password... or was.")
