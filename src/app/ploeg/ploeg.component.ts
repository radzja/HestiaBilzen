import { Component, OnInit } from '@angular/core';
import { SpelerService } from './speler.service';
import { ISpeler } from '../speler';
import { IWedstrijden } from '../wedstrijden';
import { KalenderService } from '../kalender/kalender.service';

@Component({
  selector: 'app-ploeg',
  templateUrl: './ploeg.component.html',
  styleUrls: ['./ploeg.component.css']
})
export class PloegComponent implements OnInit {

  private team = 'U21-J';
  private trainer = 'Bram De Wit';
  private _spelers: ISpeler[];
  private _wedstrijden: IWedstrijden[];

  constructor(private spelerService: SpelerService, private kalenderService: KalenderService) {
    this.spelerService.getSpelersPerTeam(this.team)
        .subscribe((spelers: ISpeler[]) =>
            this._spelers = spelers);

    this.kalenderService.getWedstrijdenPerTeam(this.team)
        .subscribe((wedstrijden: IWedstrijden[]) =>
            this._wedstrijden = wedstrijden);
  }

  ngOnInit() {
  }

}
