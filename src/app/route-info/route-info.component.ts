import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { SporthalService } from '../sporthallen/sporthal.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ISporthal } from '../sporthal';

@Component({
  selector: 'app-route-info',
  templateUrl: './route-info.component.html',
  styleUrls: ['../home/home.component.css']
})
export class RouteInfoComponent implements OnChanges {
  wedstrijdSporthal: ISporthal;
  mapsURL: SafeResourceUrl;

  constructor(private sporthalService: SporthalService, private sanitizer: DomSanitizer) {}

  // tslint:disable-next-line: no-input-rename
  @Input('sportshallId') sporthalid = 1;
  getsporthalid: number;

  // tslint:disable-next-line: no-output-rename
  @Output('changeMatch')changeMatch: EventEmitter<string> = new EventEmitter();

  nextMatch() { // You can give any function name
    console.log('EventEmitter nextMatch() triggered');
    this.changeMatch.emit('next');
  }

  prevMatch() {
    console.log('EventEmitter prevMatch() triggered');
    this.changeMatch.emit('prev');
  }

  ngOnChanges() {
    this.sporthalService.getSporthal(this.sporthalid)
        .subscribe((sporthal: ISporthal) =>
        this.wedstrijdSporthal = sporthal);
    // console.log('Sanitized mapsURL: ' + this.mapsURL);
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
