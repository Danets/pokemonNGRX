import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from "../../shared/models/pokemon";
import { PokemonService } from "../../shared/services/pokemon.service";

@Injectable({
  providedIn: 'root'
})
export class PokemonResolverService implements Resolve<Pokemon[]> {

  constructor(private pokemonService: PokemonService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Pokemon[]> {
    return this.pokemonService.getAllPokemons();
  }
}
