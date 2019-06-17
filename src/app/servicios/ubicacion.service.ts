import { Injectable } from '@angular/core';
import { position } from '../model/position';
import { AngularFirestore } from '@angular/fire/firestore'
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { BackgroundMode } from '@ionic-native/background-mode/ngx';



@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private db: AngularFirestore, public geo: Geolocation, private background: BackgroundMode) { 
    console.log('llega la servicio');
    this.background.enable();
    console.log(this.background.isActive());
  }

  sndUbicAFireBase(position : position, id : string)
  { 
    this.db.collection('motoTaxis').doc(id).update({
      posicion : position
    })
  }
}
