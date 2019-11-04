import { Component, OnChanges } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { IWedstrijden } from '../wedstrijden';
import { ISporthal } from '../sporthal';
import { KalenderService } from '../kalender/kalender.service';
import { SporthalService } from '../sporthallen/sporthal.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnChanges {
  // tslint:disable-next-line: variable-name
  private _wedstrijden: IWedstrijden[];
  private wedstrijdSporthal: ISporthal;
  selectedMatchIndex: number;
  selectedMatch: IWedstrijden;
  sportshallId: number;
  hideLogo = true;
  showGmaps = false;
  displayroute = false;

  constructor(private kalenderService: KalenderService, private sporthalService: SporthalService, private sanitizer: DomSanitizer) {
    this.kalenderService.getKomendeWedstrijden()
        .subscribe((wedstrijden: IWedstrijden[]) =>
            this._wedstrijden = wedstrijden);
  }

  ngOnChanges() {
    console.log('ngOnChanges(' + this.selectedMatchIndex + ')');
    this.updateRoute(this.selectedMatchIndex);
  }

  toggleGmaps(index: number): void {
    this.selectedMatchIndex = index;
    this.selectedMatch = this._wedstrijden[this.selectedMatchIndex];
    this.hideLogo = false;
    this.showGmaps = true;
    this.displayroute = true;
    console.log('New selectedMatchIndex: ' + this.selectedMatchIndex);
    console.log('Old this.sportshallId: ' + this.sportshallId + '\nNew this.sporthalId: ' + this.selectedMatch.sportshallId);
    this.sportshallId = this.selectedMatch.sportshallId;
  }

  switchMatch(value: string) {
    if (value === 'next') {
      this.selectNextMatch();
    } else if (value === 'prev') {
      this.selectPrevMatch();
    } else {
      console.log('updateRoute()');
      this.updateRoute(this.selectedMatchIndex);
    }
  }

  selectNextMatch() {
    console.log('selectNextMatch() triggered!');
    if (this.selectedMatchIndex < 9) {
      this.selectedMatchIndex += 1;
      this.updateRoute(this.selectedMatchIndex);
    } else {
      this.selectedMatchIndex = 0;
      this.updateRoute(this.selectedMatchIndex);
    }
  }

  selectPrevMatch() {
    console.log('selectPrevMatch() triggered!');
    if (this.selectedMatchIndex > 0) {
      this.selectedMatchIndex -= 1;
      this.updateRoute(this.selectedMatchIndex);
    } else {
      this.selectedMatchIndex = 9;
      this.updateRoute(this.selectedMatchIndex);
    }
  }

  updateRoute(selectedMatchIndex: number) {
    this.selectedMatch = this._wedstrijden[this.selectedMatchIndex];
    // tslint:disable-next-line: max-line-length
    console.log('New selectedMatchIndex: ' + this.selectedMatchIndex + '\nOriginal this.sporthalid: ' + this.sportshallId);
    this.sportshallId = this.selectedMatch.sportshallId;
    // this.sportshallId = wedstrijd.sportshallId;
    console.log('New this.sporthalid: ' + this.sportshallId);
  }
}
