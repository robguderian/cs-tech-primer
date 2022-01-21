struct Person {
    name: String,
    age: u8,
}

impl Person {
    fn new(name:String, age:u8) -> Self {
        Person {name, age}
    }

    fn get_name(&self) -> &str {
        &self.name
    }

    fn get_age(&self) -> u8 {
        self.age.clone()
    }

    fn to_string(&self) -> String {
        format!("Name: {}, Age: {}", self.name, self.age)
    }
}

struct Professor {
    person: Person,
    department: String,
}

impl Professor {
    fn new(name:String, age:u8, department:String) -> Self {
        Professor{ person: Person::new(name, age), department: department }
    }

    fn get_department(&self) -> &str {
        &self.department
    }

    fn get_name(&self) -> &str {
        self.person.get_name()
    }

    fn get_age(&self) -> u8 {
        self.person.get_age()
    }

    fn to_string(&self) -> String {
        format!("{}, Department: {}", self.person.to_string(), self.department)
    }
}

struct Student {
    person: Person,
    student_id: u32,
}

impl Student {
    fn new(name:String, age:u8, student_id:u32) -> Self {
        Student{ person: Person::new(name, age), student_id: student_id }
    }

    fn get_student_id(&self) -> u32 {
        self.student_id.clone()
    }

    fn get_name(&self) -> &str {
        self.person.get_name()
    }

    fn get_age(&self) -> u8 {
        self.person.get_age()
    }

    fn to_string(&self) -> String {
        format!("{}, StudentID: {}", self.person.to_string(), self.student_id)
    }
}

fn main() {
    let john = Person::new("John Doe".to_string(), 15);
    let jane = Student::new("Jane Doe".to_string(), 22, 1139054);
    let hellen = Professor::new("Hellen Drake".to_string(), 37,
                                "Computer Science".to_string());

    println!("{}", john.to_string());
    println!("{}", jane.to_string());
    println!("{}", hellen.to_string());
}
