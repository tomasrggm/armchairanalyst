import { Injectable } from '@angular/core';

import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { Player } from './player';
import { MatchReferenceDto } from './matchInfo/matchReferenceDto';
import { MatchListDto } from './matchInfo/matchListDto';

import { PlayerDetail } from './playerDetail';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Texto } from './objects/texto';


@Injectable({
  providedIn: 'root'
})
export class HandlerService {

  constructor(private http: HttpClient) { }



  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

getPlayers(): Observable<Player[]>{
  return this.http.get<Player[]>('api/teste2');
}

getPlayerDetail(id: string): Observable<PlayerDetail>{
  return this.http.get<PlayerDetail>('api/playerInfoId/'+id);
}

getMatchesById(id: string): Observable<MatchListDto>{
  return this.http.get<MatchListDto>("api/matches/"+id);
}

getChampionNameByKey(id:string): Observable<string>{
  return this.http.get<string>("api/champion/"+id);
}



}
