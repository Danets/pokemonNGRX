import { PokemonState } from '../../shared/states/adapters/pokemon.adapter';

export interface AppStore {
  pokemon: PokemonState;
  // id: number | null;
}