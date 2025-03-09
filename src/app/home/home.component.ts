import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { NgFor } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [HttpClientModule, PokemonCardComponent, NgFor, RouterLink]})


export class HomeComponent {
   title = "Pokedex"
   pokemonIds = ["1", "3", "5", "7", "500"]
}
