import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import { MototaxisService, motoTaxi } from "../../servicios/mototaxis.service";
import { Observable } from "rxjs/internal/observable";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { FotosService } from "../../servicios/fotos.service";


@Component({
  selector: 'app-modal-editar-registro',
  templateUrl: './modal-editar-registro.page.html',
  styleUrls: ['./modal-editar-registro.page.scss'],
})
export class ModalEditarRegistroPage implements OnInit {


  nombreMotoTaxi: string;
  apellidoMotoTaxi: string;
  telefonoMotoTaxi: string;
  placaMotoTaxi: string;
  carnetIdentidadMotoTaxi: string;
  fechaNacimientoMotoTaxi: Date;
  imagenMotoTaxi: any;
  idMotoTaxi:string;

  urlImagen: Observable<string>;
  image: any;
  myModelo: any;

  constructor(private modalCtrl: ModalController,
    private navParam: NavParams,
    private mototaxiService: MototaxisService,
    private AFStorage: AngularFireStorage, 
    private fotosService: FotosService) 
    {  
      this.myModelo = {};
    }

  ionViewDidLoad() { }

  ngOnInit() {
    const data = this.navParam.get('value') as motoTaxi;
    this.myModelo.nombreMotoTaxi = data.nombreMotoTaxi;
    this.myModelo.apellidoMotoTaxi = data.apellidoMotoTaxi;
    this.myModelo.telefonoMotoTaxi = data.telefonoMotoTaxi;
    this.myModelo.placaMotoTaxi = data.placaMotoTaxi;
    this.myModelo.carnetIdentidadMotoTaxi = data.carnetIdentidadMotoTaxi;
    this.myModelo.fechaNacimientoMotoTaxi = data.fechaNacimientoMotoTaxi;
    this.imagenMotoTaxi = data.imagenMotoTaxi;
    this.myModelo.idMotoTaxi=data.idMotoTaxi;
  }

  onCloseModal() {
    this.modalCtrl.dismiss();
  }



  modificando() {


    this.mototaxiService.modificarMotoTaxi(this.myModelo.nombreMotoTaxi,this.myModelo.apellidoMotoTaxi,this.myModelo.telefonoMotoTaxi,
      this.myModelo.carnetIdentidadMotoTaxi,this.myModelo.placaMotoTaxi,this.myModelo.fechaNacimientoMotoTaxi,
      this.imagenMotoTaxi,this.myModelo.idMotoTaxi);
    this.onCloseModal();
  }

  tomarFoto(){
    this.fotosService.takePicture().then(imagen =>{
      this.image=imagen;
      this.imagenMotoTaxi=imagen;
    }), (err) =>
    {
      console.log(err);
    }
  }
}
