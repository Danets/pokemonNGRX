import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core.module';
import { PokemonModule } from './views/pokemon/pokemon.module';

import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    CoreModule,
    PokemonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
