import { ListComponent } from './list/list.component';
import { Component } from '@angular/core';
import Student from './models/list_students';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello';
  listStudent = localStorage.getItem('Students');
}
