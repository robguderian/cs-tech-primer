The Static Keyword
==================

The `static` keyword lets us declare an attribute or method as belonging
to the *class*, instead of an *instance*.

When an attribute or method belongs to the class, it is called a class
attribute or class method.

Otherwise, it is called a instance attribute, or instance method.

Lets modify the Person class so that we can keep track of how many
Person objects we create.

```java
// Person.java
public class Person {

    private String name;

    // This is a class-level attribute that will
    // kepp track of how many Person objects we create
    private static int numPeople = 0;

    public Person(String myName)
    {
        name = myName;
        System.out.println(name + " created!");
        numPeople += 1;
    }

    // This is a class-level method that can be called using
    // Person.getNumPeople()
    public static int getNumPeople()
    {
        return numPeople;
    }

    public String getName()
    {
        return name;
    }

}
```

```java
// Main.java
public class Main {

    public static void main(String[] args)
    {
        // 0 people
        System.out.println("Created " + Person.getNumPeople() + " people");

        Person p1 = new Person("Anri of Astora");

        // 1 person
        System.out.println("Created " + Person.getNumPeople() + " people");

        // We could also do p1.getNumPeople(), but that makes the code
        // less obvious (another developper might thing getNumPeople is
        // non-static method)

        Person p2 = new Person("Horace the Hushed");

        // 2 people
        System.out.println("Created " + Person.getNumPeople() + " people");
    }

}
```

Try compiling and running the "ExampleStatic" code with

```text
javac Main.java
java Main
```
