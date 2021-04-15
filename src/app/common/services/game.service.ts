import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Game } from '../interfaces/game'
import { environment } from '../../../environments/environment'
import { map } from 'rxjs/operators'

const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(public http: HttpClient) {}

  list(): Observable<Game[]> {
    return this.http.get(environment.apiBaseUrl + 'games', optionRequete).pipe(
      map((res: Object) => <Game[]>res),
    )
  }
}