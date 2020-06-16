import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { PokemonEffects } from './shared/states/effects/pokemon.effects';
import { PokemonService } from './shared/services/pokemon.service';

import { reducers } from './shared/states/root.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PokemonEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [PokemonService],
  exports: []
})
export class CoreModule {}