import { UpdateStudentComponent } from './update-student/update-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AppComponent } from './app.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
//import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path:'add', component: CreateStudentComponent},
  {path:'update', component: UpdateStudentComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponentsD = [ ListComponent, CreateStudentComponent, UpdateStudentComponent, HomeComponent]