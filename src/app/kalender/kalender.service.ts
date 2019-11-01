import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWedstrijden } from '../wedstrijden';

@Injectable()
export class KalenderService {
  constructor(private _http: HttpClient) { }

  getWedstrijden(): Observable<IWedstrijden[]> {
    return this._http.get<IWedstrijden[]>(
      'http://localhost:3000/services/getMatches.php'
    );
  }

  getWedstrijdenPerTeam(team: string): Observable<IWedstrijden[]> {
    return this._http.get<IWedstrijden[]>(
      'http://localhost:3000/services/getMatchesByTeam.php?team=' + encodeURIComponent(team)
    );
  }

  getWedstrijd(code: string): Observable<IWedstrijden> {
    return this._http.get<IWedstrijden>(
      'http://localhost:3000/services/getMatch.php?code=' + encodeURIComponent(code)
    );
  }

  getKomendeWedstrijden(): Observable<IWedstrijden[]> {
    return this._http.get<IWedstrijden[]>(
      'http://localhost:3000/services/getUpcomingMatches.php'
    );
  }
}
