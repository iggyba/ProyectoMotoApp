import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { database } from 'firebase';
import { map } from "rxjs/operators";


export interface motoTaxi{
  nombreMotoTaxi: string;
  apellidoMotoTaxi: string;
  imagenMotoTaxi: string;
  telefonoMotoTaxi: string;
  placaMotoTaxi: string;
  idMotoTaxi: string;
}

@Injectable({
  providedIn: 'root'
})
export class MototaxisService {

  constructor(private db: AngularFirestore) { }

  getDatosMotoTaxis(){
    return this.db.collection('motoTaxis').snapshotChanges().pipe(map(taxis=> {
      return taxis.map(tax=>{
        const data = tax.payload.doc.data() as motoTaxi;
        data.idMotoTaxi = tax.payload.doc.id;
        return data;
      })
    }))
  }

  getMototaxiUsuario(idMotoTaxi: string){
    return this.db.collection('motoTaxis').doc(idMotoTaxi).snapshotChanges().pipe(map(taxis=> {
        const data = taxis.payload.data() as motoTaxi;
        data.idMotoTaxi = taxis.payload.id;
        console.log(data);
        return data;
    }))
  }
}
