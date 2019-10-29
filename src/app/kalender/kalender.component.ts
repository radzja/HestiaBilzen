import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kalender',
  templateUrl: './kalender.component.html',
  styleUrls: ['./kalender.component.css']
})
export class KalenderComponent implements OnInit {
  pageTitle: string = 'Competitie kalender 2019 - 2020';

  wedstrijden: any [] = [
  {"code":"QM104","matchDate":"26-10-19","matchTime":"14:30","homeTeam":"HC MAASMECHELEN","awayTeam":"U13-M","out":"1","sportsHallId":"17"},
  {"code":"10062","matchDate":"26-10-19","matchTime":"17:00","homeTeam":"U19-M","awayTeam":"MARGRATEN","out":"0","sportsHallId":"1"},
  {"code":"QO79","matchDate":"02-11-19","matchTime":"17:00","homeTeam":"U12","awayTeam":"Hannibal Tessenderlo","out":"0","sportsHallId":"1"},
  {"code":"10063","matchDate":"02-11-19","matchTime":"15:15","homeTeam":"VIOS","awayTeam":"U19-M","out":"1","sportsHallId":"1"}
  ];





  constructor() { }

  ngOnInit() {
  }
}
