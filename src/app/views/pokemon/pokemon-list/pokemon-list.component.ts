import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from "../../../shared/models/pokemon";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent implements OnInit {
@Input() pokemons$: Observable<Pokemon[]>;

  constructor() { }

  ngOnInit(): void {
    this.pokemons$.subscribe(data => console.log('Data: ', data));
  }

}
