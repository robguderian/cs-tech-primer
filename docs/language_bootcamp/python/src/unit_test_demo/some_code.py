def add(this, that):
    '''
    Some tested code that adds two values
    '''
    return this + that


def multiply(this, that):
    '''
    Some untested code that multiplies two values
    '''
    return this * that


if __name__ == "__main__":
    '''
    This only runs if we run the program. This code will
    NOT run if we run the unit tests
    '''
    print(add(1, 2))
    print(multiply(1, 2))
