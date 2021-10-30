package main

import (
	"fmt"
)

func main() {
	john := Person{name: "John Doe", age: 15}
	jane := Student{person: Person{name: "Jane Doe", age: 22},
		studentID: 1139054}
	hellen := Professor{person: Person{name: "Hellen Drake", age: 37},
		department: "Computer Science"}

	fmt.Println(john.ToString())
	fmt.Println(jane.ToString())
	fmt.Println(hellen.ToString())
}
