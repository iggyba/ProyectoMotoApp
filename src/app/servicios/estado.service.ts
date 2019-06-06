import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { MototaxisService, motoTaxi } from "../servicios/mototaxis.service";
import { AuthService } from "../servicios/auth.service";
@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private db: AngularFirestore,public auth: AuthService) {  }

  cambiarEstado(){
    this.db.collection('motoTaxis').doc(this.auth.getUidUser()).update({
     disponible: true
    })
    alert("Disponible");
  }
  
}
