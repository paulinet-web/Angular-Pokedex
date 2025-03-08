import { Component } from '@angular/core';
import { FetcherService } from './fetcher.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { NgFor } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FetcherService],
  imports: [HttpClientModule, PokemonCardComponent, NgFor]})

export class AppComponent {
   title = "Pokedex"
   pokemonIds = ["1", "3", "5", "7", "500"]
  constructor( private fetcherService: FetcherService){
  }
}
