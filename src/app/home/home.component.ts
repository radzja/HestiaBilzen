import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { IWedstrijden } from '../wedstrijden';
import { ISporthal } from '../sporthal';
import { KalenderService } from '../kalender/kalender.service';
import { SporthalService } from '../sporthallen/sporthal.service';
import { ISpeed } from 'selenium-webdriver';

@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(private kalenderService: KalenderService, private sporthalService: SporthalService, private sanitizer: DomSanitizer) {
    this.kalenderService.getKomendeWedstrijden()
        .subscribe((wedstrijden: IWedstrijden[]) =>
            this._wedstrijden = wedstrijden);
  }
  hideLogo = true;
  showGmaps = false;

  private _wedstrijden: IWedstrijden[];
  private wedstrijdSporthal: ISporthal;
  private mapsURL;

  OnInit() {

  }

  toggleGmaps(wedstrijd): void {
    this.hideLogo = !this.hideLogo;
    this.showGmaps = !this.showGmaps;
    this.sporthalService.getSporthal(wedstrijd.sportshallId)
        .subscribe((sporthal: ISporthal) =>
        this.wedstrijdSporthal = sporthal);
    console.log('mapsURL: ' + this.wedstrijdSporthal.mapsURL);
    this.mapsURL = this.transform(this.wedstrijdSporthal.mapsURL);
    console.log('Sanitized mapsURL: ' + this.mapsURL);
    }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
