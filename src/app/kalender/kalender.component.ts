import { Component, OnInit } from '@angular/core';
import { IWedstrijden } from '../wedstrijden';
import { KalenderService } from '../kalender/kalender.service';

@Component({
  selector: 'app-kalender',
  templateUrl: './kalender.component.html',
  styleUrls: ['./kalender.component.css']
})
export class KalenderComponent implements OnInit {
  pageTitle = 'Competitie kalender 2019 - 2020';
  private _wedstrijden: IWedstrijden[];

  // wedstrijden: IWedstrijden [] = [
  // {code: 'QM104', matchDate: '26-10-19', matchTime: '14:30', homeTeam: 'HC MAASMECHELEN', awayTeam: 'U13-M', out: 1, sportshallId: 17},
  // {code: '10062', matchDate: '26-10-19', matchTime: '17:00', homeTeam: 'U19-M', awayTeam: 'MARGRATEN', out: 0, sportshallId: 1},
  // {code: 'QO79', matchDate: '02-11-19', matchTime: '17:00', homeTeam: 'U12', awayTeam: 'Hannibal Tessenderlo', out: 0, sportshallId: 1},
  // {code: '10063', matchDate: '02-11-19', matchTime: '15:15', homeTeam: 'VIOS', awayTeam: 'U19-M', out: 1, sportshallId: 1}
  //];

  constructor(private kalenderService: KalenderService) {
    this.kalenderService.getWedstrijden()
        .subscribe((wedstrijden: IWedstrijden[]) =>
            this._wedstrijden = wedstrijden);
  }

  ngOnInit() {
  }
}
