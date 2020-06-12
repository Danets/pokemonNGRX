import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Pokemon } from "../../shared/models/pokemon";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  url = "https://pokeapi.co/api/v2/pokemon";
  selectedPocemon: Subject<Pokemon> = new Subject();
  emitedPocemon$: Observable<Pokemon> = this.selectedPocemon.asObservable();

  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url);
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url).pipe(
      map(({ id, name, height, weight, sprites }) =>  ({
        id,
        name,
        url,
        height,
        weight,
        sprites,
      }))
    );
  }
}
