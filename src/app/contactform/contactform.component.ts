import { Component, OnInit } from '@angular/core';
import { ContactSettings } from '../data/contactsettings';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
  
  export class ContactformComponent  implements OnInit {

    originalContactSettings : ContactSettings = {
        name: null,
        emailOffers: null,
        interfaceStyle: null,
        subscriptionType: null,
        notes: null
      };
  
    ContactSettings : ContactSettings = { ...this.originalContactSettings };
    
    constructor() { }
  
    ngOnInit() {
    }
  
  }
