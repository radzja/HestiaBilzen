import { Component, Input, OnChanges } from '@angular/core';
import { SporthalService } from '../sporthallen/sporthal.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ISporthal } from '../sporthal';

@Component({
  selector: 'app-route-info',
  templateUrl: './route-info.component.html',
  styleUrls: ['../home/home.component.css']
})
export class RouteInfoComponent implements OnChanges {

  // tslint:disable-next-line: no-input-rename
  @Input('sporthalid') sporthalid;
  getsporthalid: number;
  private wedstrijdSporthal: ISporthal;
  mapsURL: SafeResourceUrl;

  constructor(private sporthalService: SporthalService, private sanitizer: DomSanitizer) {
  }

  ngOnChanges() {
    this.sporthalService.getSporthal(this.sporthalid)
        .subscribe((sporthal: ISporthal) =>
        this.wedstrijdSporthal = sporthal);
    console.log('Sanitized mapsURL: ' + this.mapsURL);
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
