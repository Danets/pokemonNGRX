import { createAction, props } from "@ngrx/store";

import { Pokemon } from "../../models/pokemon";

export enum PokemonActionTypes {
  LOAD_POKEMONS = "[Pokemon] Load pokemon",
  LOAD_POKEMONS_SUCCESS = "[Pokemon] Load pokemon success",
  LOAD_POKEMONS_FAILED = "[Pokemon] Load pokemon failed",
}

export const actions = {
  loadPokemons: createAction(PokemonActionTypes.LOAD_POKEMONS),
  loadPokemonSuccess: createAction(
    PokemonActionTypes.LOAD_POKEMONS_SUCCESS,
    props<{ pokemons: Pokemon[] }>()
  ),
  loadPokemonFailed: createAction(
    PokemonActionTypes.LOAD_POKEMONS_FAILED,
    props<{ message: string }>()
  ),
};
