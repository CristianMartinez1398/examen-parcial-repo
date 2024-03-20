import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'pokedex',
    loadComponent: () => import('./pokedex/pokedex-page/pokedex-page.component').then((m) => m.PokedexPageComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
