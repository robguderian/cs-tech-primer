Objects and Object Oriented Programming (OOP)
=============================================

Object Oriented Programming (abrieviated OOP) is a *programming
paradigm*, that puts an emphasis on *classes*. Classes define a set of
closely related variables and methods.

Variables that belong to a class are also referred to as attributes
or fields.

Example - The Person Class
--------------------------

Lets say we need to represent a person in a prgram we're making.
We could create the following person *class*.

```java
// We start by declaring the name of the class. The name must match
// the name of the file, so this file would have to be named Person.java
public class Person {

    // These two variables are attributes
    private String name;  // Note that String is also a class
    private int age;

    // This is a special method called a constructor.
    // When we try to create an instance of this class, this method will
    // be called. Constructors are (almost) always public, and are
    // always named after the class.
    public Person(String my_name, int my_age)
    {
        name = my_name;
        age = my_age;
    }

    // This method is known as a "getter" method. We'll talk about
    // these later.
    public String getName()
    {
        return name;
    }

    // This method is known as a "setter" method. We'll talk about
    // these later.
    public void setName(String newName)
    {
        name = newName;
    }

    // This is another "getter" method
    public int getAge()
    {
        return age;
    }

    // This is just a regular method
    public void happyBirthday()
    {
        age += 1;
        System.out.println("IT IS YOUR BIRTHDAY. YOU ARE " + age + ".");
    }

}
```

Now that we've defined a class, we can use this class by creating
*instances* of the class (Instances are sometimes referred to as Objects).

```java
public class Main {

    public static void main(String[] args)
    {
        // Creating an INSTANCE of our person class.
        Person p1 = new Person("Siegward", 38);
        
        System.out.println("Persons name: " + p1.getName());
        System.out.println(" Persons age: " + p1.getAge());

        // To use the methods we wrote in the Person class, we
        // use the . operator as below. Note that we are calling
        // p1.setName() and not Person.setName()
        p1.setName("Siegmeyer");
        p1.happyBirthday();

        System.out.println("Persons name: " + p1.getName());
        System.out.println(" Persons age: " + p1.getAge());
    }

}
```

Try compiling and running the example in the `ExamplePerson` section by
entering the following commands

```text
javac Main.java
java Main
```
