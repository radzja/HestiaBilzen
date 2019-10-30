import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISporthal } from '../sporthal';

@Injectable()
export class SporthalService {
  constructor(private _http: HttpClient) { }

  getSporthallen(): Observable<ISporthal[]> {
    return this._http.get<ISporthal[]>(
      'http://localhost:3000/services/getSportsHalls.php'
    );
  }

  getSporthal(id: number): Observable<ISporthal> {
    return this._http.get<ISporthal>(
      'http://localhost:3000/services/getSportsHall.php?id=' + encodeURIComponent(id)
    );
  }
}
