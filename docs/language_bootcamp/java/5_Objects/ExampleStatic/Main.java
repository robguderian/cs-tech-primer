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