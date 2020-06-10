import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { PokemonService } from "../../shared/services/pokemon.service";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"],
})
export class PokemonComponent implements OnInit {
  pokemons$: Observable<[]>;
  // pokemons;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    // this.pokemonService.getAllPokemons().subscribe(data => {
    //   this.pokemons = data;
    //   console.log('Data: ', data)
    // });
    this.pokemons$ = this.pokemonService.getAllPokemons();
  }
}
