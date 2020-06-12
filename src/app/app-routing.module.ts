import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonComponent } from "./views/pokemon/pokemon.component";
import { PokemonListComponent } from "./views/pokemon/pokemon-list/pokemon-list.component";
import { PokemonDetailComponent } from "./views/pokemon/pokemon-detail/pokemon-detail.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pokemons'},
  { path: 'pokemons', component: PokemonListComponent, children: [
    // { path: 'list', component: PokemonListComponent },
  { path: ':id', component: PokemonDetailComponent },
  ] },
  { path: '**', pathMatch: 'full', redirectTo: 'pokemons' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
