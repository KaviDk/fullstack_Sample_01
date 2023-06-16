package com.dkavicode.studentsystem.service;

import com.dkavicode.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();

}
