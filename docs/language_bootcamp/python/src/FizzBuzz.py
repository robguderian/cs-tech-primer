#!/usr/bin/python3

def fizzBuzz(index: int) -> str:
    '''
    Reminder about what fizzbuzz is
    Write a program that prints the numbers from 1 to 100. But for multiples of
    three print “Fizz” instead of the number and for the multiples of five
    print “Buzz”. For numbers which are multiples of both three and five print
    “FizzBuzz”."
    '''
    out = str(index)
    if index % 15 == 0:
        out = "FizzBuzz"
    elif index % 3 == 0:
        out = "Fizz"
    elif index % 5 == 0:
        out = "Buzz"
    return out


for i in range(1, 100):
    print(fizzBuzz(i))
