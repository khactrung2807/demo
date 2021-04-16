import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { Routes, Route, ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent implements OnInit {
  StudentS: any = {};
  stuId: any;
  student: any = {};

  test = 'test';

  updateStudent!: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.stuId = this.route.snapshot.params['id'];
    let students: any[] = [];
    if (localStorage.getItem('Students')) {
      students = JSON.parse(localStorage.getItem('Students') + '');
    }
    students.forEach((s: any) => {
      if (s.studentId == this.stuId) {
        console.log(this.stuId);
        console.log(s);
        return (this.StudentS = s);
      }
    });
    this.updateStudentForm();
  }
  updateStudentForm() {
    this.updateStudent = this.fb.group({
      studentId: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      birthDay: [null, Validators.required],
      universityClass: [null, Validators.required],
      address: [null, Validators.required],
      phone: [null, Validators.required],
      mail: [null, Validators.required],
    });
  }
  get studentId() {
    return this.updateStudent.get('studentId') as FormControl;
  }
  get firstName() {
    return this.updateStudent.get('firstName') as FormControl;
  }
  get lastName() {
    return this.updateStudent.get('lastName') as FormControl;
  }
  get birthDay() {
    return this.updateStudent.get('birthDay') as FormControl;
  }
  get phone() {
    return this.updateStudent.get('phone') as FormControl;
  }
  get mail() {
    return this.updateStudent.get('mail') as FormControl;
  }
  get address() {
    return this.updateStudent.get('address') as FormControl;
  }
  get universityClass() {
    return this.updateStudent.get('universityClass') as FormControl;
  }
  onSubmit() {
    // console.log(this.updateStudent.value);
    this.student = Object.assign(this.student, this.updateStudent.value);
    this.onUpdateStudent(this.student);
    this.updateStudent.reset();
  }
  onUpdateStudent(student: any) {
    let students: any[] = [];
    let b = false;
    if (localStorage.getItem('Students')) {
      students = JSON.parse(localStorage.getItem('Students') + '');
    }
    students.forEach((s: any) => {
      if (s.studentId == student.studentId) {
        //  students.splice(s.index,1);
        students.splice(students.indexOf(s), 1, student);
        console.log(students.indexOf(s));
        localStorage.setItem('Students', JSON.stringify(students));
        b = true;
      }
    });
    if (b == false) {
      students = [...students, student];
      localStorage.setItem('Students', JSON.stringify(students));
    }
  }
}
