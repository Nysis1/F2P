import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Game } from '../interfaces/game'
import { environment } from '../../../environments/environment'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(public http: HttpClient) {}

  list(): Observable<Game[]> {
    return this.http.get(environment.apiBaseUrl + 'games').pipe(
      map((res: Object) => <Game[]>res),
    )
  }
}