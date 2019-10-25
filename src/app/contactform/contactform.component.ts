import { Component, OnInit } from '@angular/core';
import { ContactSettings } from '../data/contactsettings';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
  
  export class ContactFormComponent implements OnInit {
    
    firstName: string;
    lastName: string;
    emailAdres: string;
    subject: Array<String> = ['Inschrijving', 'Opmerking', 'Andere'];
    bericht:string;
    
        
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

    constructor(
      private router:Router
    ) { }


    ngOnInit(){
    }

    submitHandler(myForm: any) {
      this.router.navigate(['/thank-you-page'])
      console.log('Form Value', myForm.value);
    }  
  }
  