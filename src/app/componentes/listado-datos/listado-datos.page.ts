import { Component, OnInit } from '@angular/core';
import { MototaxisService, motoTaxi } from "../../servicios/mototaxis.service";
import { AlertController, ModalController,LoadingController } from '@ionic/angular';
import { ModalEditarRegistroPage } from '../modal-editar-registro/modal-editar-registro.page';
import { Router } from "@angular/router";

@Component({
  selector: 'app-listado-datos',
  templateUrl: './listado-datos.page.html',
  styleUrls: ['./listado-datos.page.scss'],
})
export class ListadoDatosPage implements OnInit {

  public motoTaxisArreglo: any = [];

  constructor(public mototaxisService: MototaxisService,
    public alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private loadingController: LoadingController,
    public router: Router) { }

  ngOnInit() {
    this.cargarLista();
  }

  async onDelete(mototaxi: motoTaxi) {
    const alert = await this.alertCtrl.create({
      header: 'Eliminando',
      message: `¿Estás seguro de que deseas eliminar al empleado/a ${mototaxi.nombreMotoTaxi} de carnet ${mototaxi.carnetIdentidadMotoTaxi}?`,
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
            this.mototaxisService.eliminarMotoTaxi(mototaxi.idMotoTaxi);
          }
        }
      ]
    });
    await alert.present();
  }

  async onOpenEditModal(mototaxi: motoTaxi) {
    const modal = await this.modalCtrl.create({
      component: ModalEditarRegistroPage,
      componentProps: { value: mototaxi },
    });
    return await modal.present();
  }

  async cargarLista() {
    let loading = await this.loadingController.create({
      message: "Cargando",
      spinner: "bubbles"
    });
    loading.present().then(() => {
      this.mototaxisService.getDatosMotoTaxis().subscribe(motoTaxis => {
        this.motoTaxisArreglo = motoTaxis;
      })
      loading.dismiss();
    })
  }

  volver(){
    this.router.navigate(['/menu-registros']);
  }
}
