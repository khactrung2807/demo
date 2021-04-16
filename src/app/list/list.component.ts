import { Routes, Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  // route: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    console.log(this.listStudent());
  }
  listStudent() {
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
      return students;
    }
  }
  onDeleteStudent(id: number) {
    let students: any[] = [];
    if (localStorage.getItem('Students')) {
      students = JSON.parse(localStorage.getItem('Students') + '');
    }
    students.forEach((s: any) => {
      if (s.studentId == id) {
        if (confirm('Bạn chắc chắn có muốn xóa sinh viên này không ?')) {
          console.log(s);
          students.splice(students.indexOf(s), 1);
          localStorage.setItem('Students', JSON.stringify(students));
        }
      }
    });
  }
  onUpdateStudent(id: number) {
    let students: any[] = [];
    if (localStorage.getItem('Students')) {
      students = JSON.parse(localStorage.getItem('Students') + '');
    }
    students.forEach((s: any) => {
      if (s.studentId == id) {
        if (confirm('Update ?')) {
          console.log(s);
          this.router.navigate(['/update', { id: s.studentId }]);
        }
      }
    });
  }
}
