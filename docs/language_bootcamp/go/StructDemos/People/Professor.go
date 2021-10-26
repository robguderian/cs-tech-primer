package main

import "fmt"

type Professor struct {
	person     Person
	department string
}

func (prof Professor) GetDepartment() string {
	return prof.department
}

func (prof Professor) ToString() string {
	return fmt.Sprintf("%s, Department: %s", prof.person.ToString(), prof.department)
}
