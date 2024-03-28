import { Component, Input } from '@angular/core';
import { FetcherService } from '../fetcher.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Pokemon = {
  name: string,
  image: string,
  ability: string,
  weight: number
}

@Component({
  standalone: true,
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
  imports: [NgIf, FormsModule]
})
export class PokemonCardComponent {
  @Input() id: string | undefined;
   pokemon: Pokemon | undefined;

   constructor(private fetcherService: FetcherService) { 
   }

   convertPoundToKg(weightInPound: number): number{
    return Math.round(weightInPound*0.453592)
   }

   getPokemonData() {
    if (this.id){
      this.fetcherService.getPokemon(this.id).subscribe((data: any) => {
        if (
          data.name &&
          data.sprites &&
          data.sprites.front_default &&
          data.abilities &&
          data.abilities.length > 0 &&
          data.abilities[0].ability &&
          data.abilities[0].ability.name &&
          data.weight
        ){
          const pokemonName = data.name as string;
          this.pokemon = {
            name: pokemonName[0].toUpperCase() + pokemonName.slice(1),
            image: data.sprites.front_default,
            ability: data.abilities[0].ability.name,
            weight: this.convertPoundToKg(data.weight as number)
          };
        }
        else{
          console.error(`Missing required data for pokemon with id ${this.id}`)
        }
          });
    }
   }

    ngOnInit(){
      this.getPokemonData();
   }
  }

