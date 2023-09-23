import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from 'src/app/_services/pokemon-service.service';
import { PokemonData } from 'src/app/models/pokemonData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData

  constructor(
    private service: PokemonServiceService
  ) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites:{
        front_default:''
      },
      types:[]
    }
   }

  ngOnInit(): void {
    this.getPokemon("pikachu")
  }

  getPokemon(searchName:string ){
    this.service.getPokemon(searchName).subscribe({
      next: (res) => {
        this.pokemon={
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types

        }
        console.log(res)

      },
      error: (err) => console.log("404")
    })
  }

}
