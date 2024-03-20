import { Component, OnInit } from '@angular/core';
import { PokedexResponde } from '../interface/pokedexresponde';
import { PokeService } from '../service/poke.service'



import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss'],
  standalone: true,
  imports: [IonList, IonLabel, IonItem, 
    CommonModule,
    IonCardSubtitle,
    IonCardContent,
    IonCard,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCardHeader,
    IonCardTitle,
  ],
})
export class PokedexPageComponent implements OnInit {
  

  pokemonDatos: PokedexResponde | null = null;
  
  

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void{
    this.getpokemondatos();
  }

  getpokemondatos(){
    this.pokeService.getpokemon().subscribe(dato => {
      this.pokemonDatos?.results;
      console.log(this.pokemonDatos?.results); 
      
    })
  }
  
}
