import { Component, OnInit } from '@angular/core';
import { MototaxisService, motoTaxi } from "../../servicios/mototaxis.service";
import { Router } from "@angular/router";
import { AuthService } from "../../servicios/auth.service";
import { AlertController } from '@ionic/angular';
import { isNullOrUndefined } from 'util';
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  public motoTaxisArreglo: motoTaxi;
  public idUsuario: string;

  constructor(public mototaxisService: MototaxisService,
    public router: Router,
    public auth: AuthService,
    public alertCtrl: AlertController) { }

  ngOnInit() {
<<<<<<< HEAD
=======
      this.mototaxisService.cambiarDisponibilidadTrue(this.auth.getUidUser());
>>>>>>> parent of a28e4c6... borrando
      this.mototaxisService.getMototaxiUsuario(this.auth.getUidUser()).subscribe(motoTaxis => {
      this.motoTaxisArreglo = motoTaxis;
    })
  }

  conectar() {
    this.router.navigate(['/ubicacion']);
  }

  async desconectar() {
    const alert = await this.alertCtrl.create({
      header: 'Salir de sesión',
      message: `¿Estás seguro de que deseas salir de sesión ${this.motoTaxisArreglo.nombreMotoTaxi}`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: (blah) => {
<<<<<<< HEAD
            console.log('Confirmación Cancelada: blah');
=======
            console.log('Confirmación Cancelada');
>>>>>>> parent of a28e4c6... borrando
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirmar');
            this.auth.logout();
<<<<<<< HEAD
=======
            this.mototaxisService.cambiarDisponibilidadFalse(this.auth.getUidUser());
>>>>>>> parent of a28e4c6... borrando
          }
        }
      ]
    });
    await alert.present();

  }

}
