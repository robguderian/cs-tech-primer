#!/usr/bin/python3

def factorial(i: int) -> int:
    '''
    factorial example
    if input is bad, throw an exception
    '''
    if i < 0:
        raise ValueError("factorial numbers must be greater than 1")

    # using multiple returns! Gasp!
    # It's not an anti-pattern for 3 line functions.
    # But, it's a really slippery slope!
    if i <= 1:
        return 1
    return i * factorial(i - 1)


print(factorial(4))

# Demo a try block...
try:
    factorial(-1)
    print("I am here")
except ValueError as ve:
    print(ve)

print("Done")
