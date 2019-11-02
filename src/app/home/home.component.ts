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
  selectedMatchIndex: number;
  sporthalid = 0;
  selectedMatch: number;
  hideLogo = true;
  showGmaps = false;
  displayroute = false;

  constructor(private kalenderService: KalenderService, private sporthalService: SporthalService, private sanitizer: DomSanitizer) {
    this.kalenderService.getKomendeWedstrijden()
        .subscribe((wedstrijden: IWedstrijden[]) =>
            this._wedstrijden = wedstrijden);
  }

  toggleGmaps(wedstrijd,index: number): void {
    this.selectedMatchIndex = index;
    this.hideLogo = false;
    this.showGmaps = true;
    this.displayroute = true;
    // console.log('\nOriginal this.sporthalid: ' + this.sporthalid);
    console.log('selectedMatchIndex: ' + this.selectedMatchIndex);
    this.sporthalid = wedstrijd.sportshallId;
    console.log('Selected wedstrijd.sportshallId: ' + wedstrijd.sportshallId + '\nNew this.sporthalid: ' + this.sporthalid);
  }

  selectNextMatch(index: number) {
    console.log('selectNextMatch(' + index + ') triggered!');
    if (index < 9) {
      this.selectedMatchIndex += 1;
    } else {
      this.selectedMatchIndex = 0;
    }
    console.log('New selectedMatchIndex: ' + this.selectedMatchIndex);
  }

  selectPrevMatch(index: number) {
    console.log('selectPrevMatch(' + index + ') triggered!');
    if (index > 0) {
      this.selectedMatchIndex -= 1;
    } else {
      this.selectedMatchIndex = 9;
    }
    console.log('New selectedMatch: ' + this.selectedMatchIndex);
  }
}
