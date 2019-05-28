import { Injectable } from '@angular/core';
import { position } from '../model/position';
import { AngularFirestore } from '@angular/fire/firestore'
import { Geolocation } from '@ionic-native/geolocation/ngx'


@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private db: AngularFirestore, public geo: Geolocation) { 
    console.log('llega la servicio')
  }

  sndUbicAFireBase(position : position, id : string)
  { 
    id = '3oiNsUoWTEMY4NHE8p2L'
    this.db.collection('MotoTaxistas').doc(id).update({
      posicion : position
    })
  }
}
