import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWedstrijden } from '../wedstrijden';

@Injectable()
export class KalenderService {
  constructor(private _http: HttpClient) { }

  getWebstrijden(): Observable<IWedstrijden[]> {
    return this._http.get<IWedstrijden[]>(
      'http://localhost:3000/services/getMatches.php'
    );
  }

  getWebstrijdenPerTeam(team: string): Observable<IWedstrijden[]> {
    return this._http.get<IWedstrijden[]>(
      'http://localhost:3000/services/getMatchesByTeam.php?team=' + encodeURIComponent(team)
    );
  }

  getWedstrijd(code: string): Observable<IWedstrijden> {
    return this._http.get<IWedstrijden>(
      'http://localhost:3000/services/getMatch.php?code=' + encodeURIComponent(code)
    );
  }

  getKomendeWebstrijden(): Observable<IWedstrijden[]> {
    return this._http.get<IWedstrijden[]>(
      'http://localhost:3000/services/getUpcomingMatches.php'
    );
  }

  /* addState(name: string, code: string): Observable<boolean> {
    return this._http.post<boolean>(
      'http://localhost:3000/services/addState.php',
      { name, code }
    );
  } */
}
