import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactformComponent } from './contactform/contactform.component';
import { CalenderComponent } from './calender/calender.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactformComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
