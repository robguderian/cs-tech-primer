package main

import "fmt"

type Person struct {
	name string
	age  uint8 // 0 to 128
}

func (person Person) GetName() string {
	return person.name
}

func (person Person) GetAge() uint8 {
	return person.age
}

func (person Person) ToString() string {
	return fmt.Sprintf("Name: %s, Age: %d", person.name, person.age)
}
