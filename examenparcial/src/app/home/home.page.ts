import { Component } from '@angular/core';
import {Geolocation} from '@capacitor/geolocation'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon],
})
export class HomePage {
  mensajeUbicacion: string = '';

  async obtenerUbicacion() {
    try {
      const position = await Geolocation.getCurrentPosition();
      const latitud = position.coords.latitude;
      const longitud = position.coords.longitude;
      
      this.mensajeUbicacion = `Latitud: ${latitud}, Longitud: ${longitud}`;
    } catch (error) {
      console.error('Error al obtener la ubicación: ', error);
      
    }
  }


  constructor() {}
}
