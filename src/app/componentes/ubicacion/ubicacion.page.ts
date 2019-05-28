import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { HomePageModule } from 'src/app/home/home.module';

import { position } from "../../model/position";
import { NavParams, ModalController } from "@ionic/angular";
import { UbicacionService } from '../../servicios/ubicacion.service'
import { error } from '@angular/compiler/src/util';
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  lat: number;
  lng: number;
  id : string;

  posicion : position;

  public isToggled: boolean;

  constructor(public geo: Geolocation, public ubicacionService: UbicacionService ) {}

  ngOnInit() {
    
   }

  MandarUbicacion(toogleValue: boolean) {
    console.log(this.isToggled)

    if (toogleValue) {
      let watch = this.geo.watchPosition();
      watch.subscribe((data) => {
        //data can be a set of coordinates, or an error (if an error occurred).
        this.lat = data.coords.latitude
        this.lng = data.coords.longitude
        const loc: position = {
          Latitud: data.coords.latitude,
          Longitud: data.coords.longitude,
        }
       this.ubicacionService.sndUbicAFireBase(loc,'nada');
      });
    } 
  }

  /*private sndUbicAFireBase(position : position, id : string)
  { 
    id = '3oiNsUoWTEMY4NHE8p2L'
    this.db.collection('MotoTaxistas').doc(id).update({
      posicion : position
    })
  }*/
}
