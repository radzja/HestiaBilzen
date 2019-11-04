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
  // tslint:disable-next-line: variable-name
  private _wedstrijden: IWedstrijden[];

  constructor(private kalenderService: KalenderService) {
    this.kalenderService.getWedstrijden()
        .subscribe((wedstrijden: IWedstrijden[]) =>
            this._wedstrijden = wedstrijden);
  }

  ngOnInit() {
  }
}
