import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";

import { PokemonComponent } from "./pokemon.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";

const COMPONENTS = [
  PokemonComponent,
  PokemonListComponent,
  PokemonDetailComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, SharedModule],
  exports: COMPONENTS,
})
export class PokemonModule {}
