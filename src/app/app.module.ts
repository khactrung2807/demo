import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
//import { StudentListsService } from './service/student-lists.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routingComponentsD } from './app-routing.module';
import { AppComponent} from './app.component';
import { from } from 'rxjs';
// import { CreateStudentComponent } from './create-student/create-student.component';
// import { UpdateStudentComponent } from './update-student/update-student.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponentsD
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    // StudentListsService 
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
