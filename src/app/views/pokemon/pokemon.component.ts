import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "../../shared/models/pokemon";

import { PokemonService } from "../../shared/services/pokemon.service";
import * as PokemonSelectors from '../../shared/states/selectors/pokemon.selector';
import { actions as PokemonActions } from '../../shared/states/actions/pokemon.actions';
import { Store } from '@ngrx/store';
import { AppStore } from '../../shared/models/store.interface';

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"],
})
export class PokemonComponent implements OnInit {
  // pokemons$: Observable<Pokemon[]>;
  pokemon$: Observable<Pokemon>;

  public pokemons$: Observable<Pokemon[]> = this.store$.select(
    PokemonSelectors.selectAll
  );

  // constructor(private pokemonService: PokemonService) {}
  constructor(private store$: Store<AppStore>, private pokemonService: PokemonService) {
        // OR SELECT HERE ??? 
    // this.pokemon$ = this.store$.select(PokemonSelectors.selectAll)
    this.store$.dispatch(PokemonActions.loadPokemons());
  }

  ngOnInit(): void {
    // this.pokemons$ = this.pokemonService.getAllPokemons();
    this.pokemon$ = this.pokemonService.emitedPocemon$;
    // OR DISPATCH HERE ??? 
    // this.store$.dispatch(PokemonActions.loadPokemons());
  }
}
