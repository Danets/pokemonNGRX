import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "../../shared/models/pokemon";

import { PokemonService } from "../../shared/services/pokemon.service";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"],
})
export class PokemonComponent implements OnInit {
  pokemons$: Observable<Pokemon[]>;
  pokemon$: Observable<Pokemon>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons$ = this.pokemonService.getAllPokemons();
    this.pokemon$ = this.pokemonService.emitedPocemon$;
  }
}
