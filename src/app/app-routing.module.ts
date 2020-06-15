import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PokemonListComponent } from "./views/pokemon/pokemon-list/pokemon-list.component";
import { PokemonDetailComponent } from "./views/pokemon/pokemon-detail/pokemon-detail.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "pokemons" },
  {
    path: "pokemons",
    component: PokemonListComponent,
    children: [{ path: ":id", component: PokemonDetailComponent }],
  },
  { path: "**", pathMatch: "full", redirectTo: "pokemons" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
