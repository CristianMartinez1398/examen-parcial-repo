import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PokedexResponde} from '../interface/pokedexresponde'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private api = 'https://pokeapi.co/api/v2/pokemon' 

  constructor(private http: HttpClient) { }

  getpokemon(): Observable<PokedexResponde[]>{
    return this.http.get<PokedexResponde[]>(this.api);
  }

}
