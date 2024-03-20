import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PokeApiResponse} from '../interface/pokemon'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private api = 'https://pokeapi.co/api/v2/pokemon' 

  constructor(private http: HttpClient) { }

  getpokemon(): Observable<PokeApiResponse[]>{
    return this.http.get<PokeApiResponse[]>(this.api);
  }

}
