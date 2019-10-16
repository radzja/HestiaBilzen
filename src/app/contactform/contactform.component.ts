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
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

    originalContactSettings : ContactSettings = {
      name: null,
      emailOffers: null,
      interfaceStyle: null,
      subscriptionType: null,
      notes: null
    };
  
    userRating = 0;
    maxRating = 10;
    contactSettings : ContactSettings = { ...this.originalContactSettings };
    postError = false;
    postErrorMessage = '';
    subscriptionTypes: Observable<string[]>;
  
    onBlur(field : NgModel) {
      console.log('in onBlur: ', field.valid);
    }
  
    onHttpError(errorResponse: any) {
      console.log('error: ', errorResponse);
      this.postError = true;
      this.postErrorMessage = errorResponse.error.errorMessage;
    }
  
    onSubmit(form: NgForm) {
      console.log('in onSubmit: ', form.value);
  
      // if (form.valid) {
      //   this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      //     result => console.log('success: ', result),
      //     error => this.onHttpError(error)
      //   );
      // }
      // else {
      //   this.postError = true;
      //   this.postErrorMessage = "Please fix the above errors"
      // }
    }
  
  }
  