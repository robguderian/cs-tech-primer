Access Modifiers
================

Now that we know a bit about classes, we can finally explain what those
`public` and `private` keywords do.

When something is declared `public`, it is accessible from anywhere in
your program.

When something is declared `private`, it is only accessible from within
the class it was defined in.

```java
// Person.java
public class Person {

    private String name;
    public int age;

    public Person(String myName, int myAge)
    {
        name = myName;
        age = myAge;
    }
}
```

```java
// Main.java
public class Main {

    public static void main(String[] args)
    {
        // Create an instance of Person
        Person p = new Person("Paul Atreides", 44);

        // This is fine, since age is public
        p.age = 47238;

        // This will cause a compile-time error!
        // name is not accessible from here
        // since it is private
        p.name = "Muad'Dib";

    }

}
```

In general, you should usually set your class attributes to private and
write methods to access and modify those attributes. These methods are
known as getters and setters (recall the getName() and setName() methods
from the Person class in the section 5.1)

Getters and Setters
-------------------

There are many reasons to use getters and setters for your attributes
rather than setting those attributes public.

Maybe you want unrestricted retrieval of an attribute, but setting the
value needs to go through some other checks first. Rather than performing
these checks every time the value needs updating, you could use a setter
method.

```java
public class Person {
    
    private int age;

    // ...

    // Getter
    public int getAge()
    {
        return age;
    }

    // Setter, with some added logic
    public void setAge(int newAge)
    {
        if(age >= 0 && age <= 99) {
            age = newAge;
        }
    }

}
```

Or consider the similar example in section 5.1, where we didn't even
allow the user to freely set their age. Instead, the only way to modify
age was through the happyBirthday() method, which incremented their age
by 1.

Some attributes might only be used internally. In this case, you wouldn't
even create a getter or setter. Or, the attribute might need to be
read-only, in which case you would only add a getter.

Class Access Modifiers
----------------------

So far, all the classes we create have been declared `public`. Same as
before, when we declare a class public, it will be accessible from
anywhere in our program.

But, if we don't specify an access modifier, it will only be accessible
from within the *package*.

We will discuss packages later on, so for now, all your classes should be
delcared public, and placed in their own seperate files.
