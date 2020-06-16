import { Action, createReducer, on } from "@ngrx/store";
import { PokemonState, pokemonAdapter } from "../adapters/pokemon.adapter";

import { actions as PokemonActions } from "../actions/pokemon.actions";

export function pokemonInitialState(): PokemonState {
  return pokemonAdapter.getInitialState();
}

const pokemonReducer = createReducer(
  pokemonInitialState(),
  on(PokemonActions.loadPokemonSuccess, (state, { pokemons }) => {
    return pokemonAdapter.addAll(pokemons, state);
    // return pokemonAdapter.addMany(pokemons, { ...state, id: null });
    // return pokemonAdapter.
  })
);

export function reducer(state: PokemonState | undefined, action: Action) {
  return pokemonReducer(state, action);
}
