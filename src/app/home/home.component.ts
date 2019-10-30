import { Component, OnInit } from '@angular/core';
import { IWedstrijden } from '../wedstrijden';

@Component({
 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hideLogo  : boolean = true;
  showGmaps : boolean = false;
<<<<<<< HEAD

  wedstrijden: IWedstrijden[] = [
    {"code":"QM104","matchDate":"26-10-19","matchTime":"14:30","homeTeam":"HC MAASMECHELEN","awayTeam":"U13-M","out":1,"sportsHallId":17},
    {"code":"10062","matchDate":"26-10-19","matchTime":"17:00","homeTeam":"U19-M","awayTeam":"MARGRATEN","out":0,"sportsHallId":1},
    {"code":"QO79","matchDate":"02-11-19","matchTime":"17:00","homeTeam":"U12","awayTeam":"Hannibal Tessenderlo","out":0,"sportsHallId":1},
    {"code":"10063","matchDate":"02-11-19","matchTime":"15:15","homeTeam":"VIOS","awayTeam":"U19-M","out":1,"sportsHallId":1}
    ];




=======
>>>>>>> aed3abef6e6356c23f9b53fd42d31c6a303046ab
  constructor() { }

  ngOnInit() {
  }  
  
toggleGmaps (): void {
  this.hideLogo = !this.hideLogo;
  this.showGmaps = !this.showGmaps;
  }
}
