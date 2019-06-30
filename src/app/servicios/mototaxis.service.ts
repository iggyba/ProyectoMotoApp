import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { database } from 'firebase';
import { map } from "rxjs/operators";
import { FotosService } from "../servicios/fotos.service";
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router";



export interface motoTaxi {

  idMotoTaxi: string;
  nombreMotoTaxi: string;
  apellidoMotoTaxi: string;
  telefonoMotoTaxi: string;
  placaMotoTaxi: string;
  carnetIdentidadMotoTaxi: string;
  fechaNacimientoMotoTaxi: Date;
  email: string;
  password: string;
  imagenMotoTaxi: string;
  disponibilidad: boolean;

}


@Injectable({
  providedIn: 'root'
})
export class MototaxisService {

  motoTaxi: motoTaxi;


  constructor(private db: AngularFirestore,
              private fotosService: FotosService,
              public alertCtrl: AlertController,
              public router: Router) { }

  getDatosMotoTaxis() {
    return this.db.collection('motoTaxis').snapshotChanges().pipe(map(taxis => {
      return taxis.map(tax => {
        const data = tax.payload.doc.data() as motoTaxi;
        data.idMotoTaxi = tax.payload.doc.id;
        return data;
      })
    }))
  }

  getMototaxiUsuario(idMotoTaxi: string) {

    return this.db.collection('motoTaxis').doc(idMotoTaxi).snapshotChanges().pipe(map(taxis => {
      const data = taxis.payload.data() as motoTaxi;
     // if(data.disponibilidad==false){
      data.idMotoTaxi = taxis.payload.id;
     // this.cambiarDisponibilidadTrue(data.idMotoTaxi);
      return data;
      /*}
      else
      {*/
      /*  alert("Ya se ingresó desde otro dispositivo")
        this.router.navigate(['/login']);
      }*/
    }))
  }

  eliminarMotoTaxi(id: string) {
    this.db.collection('motoTaxis').doc(id).delete()
  }

  modificarMotoTaxi(nombreMotoTaxiM:string,apellidoMotoTaxiM: string,telefonoMotoTaxiM:string,
    carnetIdentidadMotoTaxiM:string,placaMotoTaxiM:string,fechaNacimientoMotoTaxiM:Date,
    imagenMotoTaxiM:string,idMotoTaxi:string) {
    this.db.collection('motoTaxis').doc(idMotoTaxi).update({

      nombreMotoTaxi: nombreMotoTaxiM,
      apellidoMotoTaxi: apellidoMotoTaxiM,
      telefonoMotoTaxi: telefonoMotoTaxiM,
      placaMotoTaxi: placaMotoTaxiM,
      carnetIdentidadMotoTaxi: carnetIdentidadMotoTaxiM,
      fechaNacimientoMotoTaxi: fechaNacimientoMotoTaxiM,
      imagenMotoTaxi: imagenMotoTaxiM
    })
    this.fotosService.uploadImage(imagenMotoTaxiM);
    this.mensajeModificacionExito();
  }

  cambiarDisponibilidadTrue(idMotoTaxi:string){
    this.db.collection('motoTaxis').doc(idMotoTaxi).update({
      disponible: true
    })
    this.mensajeBienvenida();
  }

  cambiarDisponibilidadFalse(idMotoTaxi:string){
    this.db.collection('motoTaxis').doc(idMotoTaxi).update({
      disponible: false
    })
  }

  async mensajeBienvenida(){
    const alert = await this.alertCtrl.create({
      message: `BIENVENID@, ahora usted se encuentra disponible para realizar pedidos`,
    });
    await alert.present();
  }

  async mensajeModificacionExito(){
    const alert = await this.alertCtrl.create({
      message: `Mototaxista modificado con éxito`,
    });
    await alert.present();
  }
}
