import { Component, OnInit } from '@angular/core';
import { MototaxisService, motoTaxi } from "../../servicios/mototaxis.service";
import { Router } from "@angular/router";

import { AuthService } from "../../servicios/auth.service";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  public motoTaxisArreglo: motoTaxi;

  constructor(public mototaxisService : MototaxisService, 
              public router : Router, 
              public auth: AuthService,
              public alertCtrl : AlertController) { }

  ngOnInit() {
      this.mototaxisService.getMototaxiUsuario(this.auth.getUidUser()).subscribe(motoTaxis =>{
      this.motoTaxisArreglo=motoTaxis;
      })
  }

  conectar(){
    this.router.navigate(['/ubicacion']);
  }

  async desconectar(){
    const alert = await this.alertCtrl.create({
      header: 'Salir de sesión',
      message: `¿Estás seguro de que deseas salir de sesión ${this.motoTaxisArreglo.nombreMotoTaxi}`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirmación Cancelada: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirmar');
            this.auth.logout();
          }
        }
      ]
    });
    await alert.present();
    
  }
 
}
