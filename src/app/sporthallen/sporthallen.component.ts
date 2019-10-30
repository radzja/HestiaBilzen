import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { ISporthal } from '../sporthal';
import { SporthalService } from '../sporthallen/sporthal.service';

@Component({
  selector: 'app-sporthallen',
  templateUrl: './sporthallen.component.html',
  styleUrls: ['./sporthallen.component.css']
})

export class SporthallenComponent implements OnInit {

  private _sporthallen: ISporthal[];
  private newMapURLs;

  constructor(private sporthalService: SporthalService, private sanitizer: DomSanitizer) {
    this.sporthalService.getSporthallen()
        .subscribe((sporthallen: ISporthal[]) =>
            this._sporthallen = sporthallen);

    // this._sporthallen.forEach(sporthal => {
    //   console.log('Original mapsURL: ' + sporthal.mapsURL);
    //   console.log('New sanitized mapsURL: ' + this.transform(sporthal.mapsURL));
    //   this.newMapURLs.append(this.transform(sporthal.mapsURL));
    // });
  }

  private mapsURL;

  ngOnInit() {
  }

  // toggleGmaps(wedstrijd): void {
  //   this.hideLogo = !this.hideLogo;
  //   this.showGmaps = !this.showGmaps;
  //   this.sporthalService.getSporthal(wedstrijd.sportshallId)
  //       .subscribe((sporthal: ISporthal) =>
  //       this.wedstrijdSporthal = sporthal);

  //   }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
