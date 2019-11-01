import { Component } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { IWedstrijden } from '../wedstrijden';
import { ISporthal } from '../sporthal';
import { KalenderService } from '../kalender/kalender.service';
import { SporthalService } from '../sporthallen/sporthal.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  // tslint:disable-next-line: variable-name
  private _wedstrijden: IWedstrijden[];
  private wedstrijdSporthal: ISporthal;
  sporthalid = 0;
  hideLogo = true;
  showGmaps = false;
  displayroute = false;

  constructor(private kalenderService: KalenderService, private sporthalService: SporthalService, private sanitizer: DomSanitizer) {
    this.kalenderService.getKomendeWedstrijden()
        .subscribe((wedstrijden: IWedstrijden[]) =>
            this._wedstrijden = wedstrijden);
  }

  toggleGmaps(wedstrijd): void {
    this.hideLogo = false;
    this.showGmaps = true;
    this.displayroute = true;
    console.log('\nOriginal this.sporthalid: ' + this.sporthalid);
    this.sporthalid = wedstrijd.sportshallId;
    console.log('Selected wedstrijd.sportshallId: ' + wedstrijd.sportshallId + '\nNew this.sporthalid: ' + this.sporthalid);
  }
}
