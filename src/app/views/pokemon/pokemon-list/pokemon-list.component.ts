import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
@Input() pokemons$: Observable<[]>;

  constructor() { }

  ngOnInit(): void {
    this.pokemons$.subscribe(data => console.log('Data: ', data));
  }

}
