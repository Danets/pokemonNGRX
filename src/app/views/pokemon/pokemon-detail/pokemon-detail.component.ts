import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "../../../shared/models/pokemon";
@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailComponent {
  @Input() pokemon$: Observable<Pokemon>;
}
