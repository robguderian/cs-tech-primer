public class Main {

    public static void main(String[] args)
    {
        // Creating an instance of our person class.
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