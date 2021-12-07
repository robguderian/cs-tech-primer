import random


def add(this, that):
    '''
    Some tested code that adds two values
    '''
    return this + that


def multiply(this, that):
    '''
    Some untested code that multiplies two values
    '''
    import pdb
    pdb.set_trace()
    return this * that


def crapFib(n):
    if n < 2:
        return 1
    return n + (crapFib(n-1))


def bubble(size):
    data = list(range(size))
    random.shuffle(data)

    for i in range(len(data) - 1):
        for j in range(0, len(data) - 1 - i):
            if data[j] > data[j + 1]:
                # swap
                # yes this can be done in 1 line
                # no I will not do it.
                temp = data[j]
                data[j] = data[j + 1]
                data[j + 1] = temp


def insertion(size):
    data = list(range(size))
    random.shuffle(data)

    for i in range(1, len(data)):
        # shuffle in in
        for j in range(i, 0, -1):  # ick stepping back is gross.
            if data[j] < data[j - 1]:
                # swap as a one liner, because you're curious
                data[j], data[j - 1] = data[j - 1], data[j]
                # I hate it.
            else:
                break  # I also hate this.


if __name__ == "__main__":
    '''
    This only runs if we run the program. This code will
    NOT run if we run the unit tests
    '''
    print(add(1, 2))
    print(multiply(1, 2))
    print(crapFib(100))

    size = 1000
    trials = 100
    for _ in range(trials):
        bubble(size)
        insertion(size)
