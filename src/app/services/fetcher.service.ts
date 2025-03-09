import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)
export class FetcherService {
  private readonly httpClient = inject(HttpClient);

  getPokemon(id: string): Observable<any>{
     return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  }
}
