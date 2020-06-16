import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { Injectable } from "@angular/core";
import { Pokemon } from "../../models/pokemon";
import { actions as PokemonActions } from "../actions/pokemon.actions";
import { PokemonService } from "../../services/pokemon.service";
import { of } from "rxjs";

@Injectable()
export class PokemonEffects {
  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}

  POKEMON_ACTIONS_SUCCESS = [PokemonActions.loadPokemonSuccess];

  POKEMON_ACTIONS_FAILED = [PokemonActions.loadPokemonFailed];

  loadAllPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActions.loadPokemons),
      switchMap(() => this.pokemonService.getAllPokemons().pipe(
          map((data) => PokemonActions.loadPokemonSuccess({ pokemons: data['results']})),
          catchError((message) =>
            of(PokemonActions.loadPokemonFailed({ message }))
          )
        )
      )
    )
  );

}
