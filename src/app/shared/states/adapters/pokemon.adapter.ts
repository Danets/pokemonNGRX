import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Pokemon } from '../../models/pokemon';

// export const pokemonAdapter = createEntityAdapter<Pokemon>();

/* RETURN NAME INSTEAD ID */
export const pokemonAdapter = createEntityAdapter<Pokemon>({ selectId: (pokemon: Pokemon) => pokemon.name });

export interface PokemonState extends EntityState<Pokemon> {}