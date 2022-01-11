// We start by declaring the name of the class. The name must match
// the name of the file, so this file would have to be named Person.java
public class Person {

    // These two variables are attributes
    private String name;  // String is also a class
    private int age;

    // This is a special method called a constructor.
    // When we try to create an instance of this class, this method will
    // be called.
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