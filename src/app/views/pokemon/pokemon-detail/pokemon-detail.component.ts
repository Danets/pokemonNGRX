import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "../../../shared/models/pokemon";

import { PokemonService } from "../../../shared/services/pokemon.service";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailComponent {
  @Input() pokemon$: Observable<Pokemon>;

  constructor(private pokemonService: PokemonService) {}

  // ngOnInit(): void {
  //   this.pokemonService.emitedPocemon$.subscribe(pokemon => this.pokemon = pokemon);
  // }
  
}
