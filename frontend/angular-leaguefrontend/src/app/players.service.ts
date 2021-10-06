import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }
}
