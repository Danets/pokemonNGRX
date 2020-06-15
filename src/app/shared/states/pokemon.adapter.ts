import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Pokemon } from '../models/pokemon';

export const pokemonAdapter = createEntityAdapter<Pokemon>();

export interface PokemonState extends EntityState<Pokemon> {}