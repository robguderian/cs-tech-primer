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