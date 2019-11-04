import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISpeler } from '../speler';

@Injectable()
export class SpelerService {
  remoteHost = 'https://www.hestiabilzen.be/backendPHP/';

  constructor(private _http: HttpClient) { }

  getSpelers(): Observable<ISpeler[]> {
    return this._http.get<ISpeler[]>(
      this.remoteHost + 'services/getPlayers.php'
    );
  }

  getSpelersPerTeam(team: string): Observable<ISpeler[]> {
    return this._http.get<ISpeler[]>(
      this.remoteHost + 'services/getPlayersByTeam.php?team=' + encodeURIComponent(team)
    );
  }

  getJarige(birthDate: string): Observable<ISpeler> {
    return this._http.get<ISpeler>(
      this.remoteHost + 'services/getPlayersByBirthdate.php?birthDate=' + encodeURIComponent(birthDate)
    );
  }
}
