import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<[]> {
    const url = "https://pokeapi.co/api/v2/pokemon";
    return this.http.get<[]>(url);
  }
}
