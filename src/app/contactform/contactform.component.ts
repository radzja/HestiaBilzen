import { Component, OnInit } from '@angular/core';
import { ContactSettings } from '../data/contactsettings';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
  
  export class ContactFormComponent implements OnInit {
 
    subject: Array<String> = ['Inschrijving', 'Opmerking', 'Andere'];
    user = { 'fname': 'Frank', 'lname' : 'Martens'};
    
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

    constructor() { }


    ngOnInit(){
    }

    submitHandler(myForm: any) {
      // console.log(myForm);
      console.log('Model Value', this.user);
      console.log('Form Value', myForm.value);
    }  
  }
  