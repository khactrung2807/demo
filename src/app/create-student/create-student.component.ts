import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  registrationForm!: FormGroup;
  student: any = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createStudentForm();
  }
  createStudentForm() {
    this.registrationForm = this.fb.group({
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
    return this.registrationForm.get('studentId') as FormControl;
  }
  get firstName() {
    return this.registrationForm.get('firstName') as FormControl;
  }
  get lastName() {
    return this.registrationForm.get('lastName') as FormControl;
  }
  get birthDay() {
    return this.registrationForm.get('birthDay') as FormControl;
  }
  get phone() {
    return this.registrationForm.get('phone') as FormControl;
  }
  get mail() {
    return this.registrationForm.get('mail') as FormControl;
  }
  get address() {
    return this.registrationForm.get('address') as FormControl;
  }
  get universityClass() {
    return this.registrationForm.get('universityClass') as FormControl;
  }
  onSubmit() {
    console.log(this.registrationForm.value);
    this.student = Object.assign(this.student, this.registrationForm.value);
    this.addStudent(this.student);
    this.registrationForm.reset();
  }

  addStudent(student: any) {
    // let students = [];
    // if(localStorage.getItem('Students')){
    //     students = JSON.parse(localStorage.getItem('Students')+"");
    //     students = [student, ...students];
    // }else{
    //   students = [student];
    // }
    // localStorage.setItem('Students',JSON.stringify(students));
    let students = [];
    if (localStorage.getItem('Students')) {
      students = JSON.parse(localStorage.getItem('Students') + '');
      students = [...students, student];
    } else {
      students = [student];
    }
    localStorage.setItem('Students', JSON.stringify(students));
  }
}
