import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class FetcherService {
  constructor(private http: HttpClient) { 
  }

  getPokemon(id: string): Observable<any>{
     return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  }
}
