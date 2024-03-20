import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interface/pokemon';
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
  

  pokemonDatos: Pokemon [] = [];
  
  

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void{
    this.getpokemondatos();
  }

  getpokemondatos(){
    this.pokeService.getpokemon().subscribe(response => {
      this.pokemonDatos = response.results;
      
      
    })
  }
  
}
