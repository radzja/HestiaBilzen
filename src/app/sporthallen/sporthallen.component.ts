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

  // tslint:disable-next-line: variable-name
  private _sporthallen: ISporthal[];
  private mapsURL;

  constructor(private sporthalService: SporthalService, private sanitizer: DomSanitizer) {
    this.sporthalService.getSporthallen()
        .subscribe((sporthallen: ISporthal[]) =>
            this._sporthallen = sporthallen);
  }

  ngOnInit() {
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
