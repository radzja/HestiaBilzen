import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWedstrijden } from '../wedstrijden';

@Injectable()
export class KalenderService {
  remoteHost = 'https://www.hestiabilzen.be/backendPHP/';
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  getWedstrijden(): Observable<IWedstrijden[]> {
    return this._http.get<IWedstrijden[]>(
      this.remoteHost + 'services/getMatches.php'
    );
  }

  getWedstrijdenPerTeam(team: string): Observable<IWedstrijden[]> {
    return this._http.get<IWedstrijden[]>(
      this.remoteHost + 'services/getMatchesByTeam.php?team=' + encodeURIComponent(team)
    );
  }

  getWedstrijd(code: string): Observable<IWedstrijden> {
    return this._http.get<IWedstrijden>(
      this.remoteHost + 'services/getMatch.php?code=' + encodeURIComponent(code)
    );
  }

  getKomendeWedstrijden(): Observable<IWedstrijden[]> {
    return this._http.get<IWedstrijden[]>(
      this.remoteHost + 'services/getUpcomingMatches.php'
    );
  }
}
