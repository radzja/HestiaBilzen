import { Component, OnInit } from '@angular/core';
import { IWedstrijden } from '../wedstrijden';
import { KalenderService } from '../kalender/kalender.service';

@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hideLogo = true;
  showGmaps = false;

  private _webstrijden: IWedstrijden[];
  private sporthalService: SporthalService;
  // private _currentCountry: IWedstrijden;

  constructor(private kalenderService: KalenderService) {
    this.kalenderService.getKomendeWebstrijden()
        .subscribe((webstrijden: IWedstrijden[]) =>
            this._webstrijden = webstrijden);
  }

  toggleGmaps(sporthalId: string): void {
    this.hideLogo = !this.hideLogo;
    this.showGmaps = !this.showGmaps;
    }
}
