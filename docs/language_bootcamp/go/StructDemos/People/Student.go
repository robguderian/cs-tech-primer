package main

import "fmt"

type Student struct {
	person    Person
	studentID int
}

func (student Student) GetStudentID() int {
	return student.studentID
}

func (student Student) ToString() string {
	return fmt.Sprintf("%s, StudentID: %d", student.person.ToString(), student.studentID)
}
