import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Router } from "@angular/router";
import { Pokemon } from "../../../shared/models/pokemon";
import { PokemonService } from "../../../shared/services/pokemon.service";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  @Input() pokemons$: Observable<Pokemon[]>;
  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  trackByFn(idx, item) {
    return idx;
  }

  onDetail(url: string) {
    this.pokemonService.getPokemon(url).subscribe((res) => {
      this.pokemon = res;
      this.router.navigate(["/pokemons", this.pokemon.id]);
      this.pokemonService.selectedPocemon.next(this.pokemon);
      console.log(this.pokemon);
    });
  }
}
