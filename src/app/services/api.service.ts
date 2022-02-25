import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '../model/music.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getMusic (title:any): Observable<Music> {
    
  const headers = new HttpHeaders().append('header', 'value');
  const params = new HttpParams().append('query', title);
    return this.http.get<Music>(
      'https://audius-discovery-1.cultur3stake.com/v1/tracks/search',{headers, params}
    );
  }
}
