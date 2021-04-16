import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponentsD } from './app-routing.module';
import { AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponentsD
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
