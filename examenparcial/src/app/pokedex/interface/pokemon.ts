export interface Pokemon {
    
    name: string 
    url: string;
}

export interface PokeApiResponse {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
  }