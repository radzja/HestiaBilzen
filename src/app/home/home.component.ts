import { Component, OnInit } from '@angular/core';

@Component({
 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hideLogo  : boolean = true;
  showGmaps : boolean = false;
  constructor() { }

  ngOnInit() {
  }  
  
toggleGmaps (): void {
  this.hideLogo = !this.hideLogo;
  this.showGmaps = !this.showGmaps;
  }
}
