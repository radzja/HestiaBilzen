import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISporthal } from '../sporthal';

@Injectable()
export class SporthalService {

  remoteHost = 'https://www.hestiabilzen.be/backendPHP/';

  constructor(private _http: HttpClient) { }

  getSporthallen(): Observable<ISporthal[]> {
    return this._http.get<ISporthal[]>(
      this.remoteHost + 'services/getSportsHalls.php'
    );
  }

  getSporthal(id: number): Observable<ISporthal> {
    return this._http.get<ISporthal>(
      this.remoteHost + 'services/getSportsHall.php?id=' + encodeURIComponent(id)
    );
  }
}
