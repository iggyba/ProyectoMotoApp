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

  constructor(private modalCtrl: ModalController,
    private navParam: NavParams,
    private mototaxiService: MototaxisService,
    private AFStorage: AngularFireStorage, 
    private fotosService: FotosService) { }

  ngOnInit() {
    const data = this.navParam.get('value') as motoTaxi;
    this.nombreMotoTaxi = data.nombreMotoTaxi;
    this.apellidoMotoTaxi = data.apellidoMotoTaxi;
    this.telefonoMotoTaxi = data.telefonoMotoTaxi;
    this.placaMotoTaxi = data.placaMotoTaxi;
    this.carnetIdentidadMotoTaxi = data.carnetIdentidadMotoTaxi;
    this.fechaNacimientoMotoTaxi = data.fechaNacimientoMotoTaxi;
    this.imagenMotoTaxi = data.imagenMotoTaxi;
    this.idMotoTaxi=data.idMotoTaxi;
  }

  onCloseModal() {
    this.modalCtrl.dismiss();
  }


  /*onUpload(e) {

    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `profile_${id}`;
    const ref = this.AFStorage.ref(filePath);
    const task = this.AFStorage.upload(filePath, file);
    task.snapshotChanges().pipe(finalize(() => this.urlImagen = ref.getDownloadURL())).subscribe();
  }*/

  modificando() {

    this.mototaxiService.modificarMotoTaxi(this.nombreMotoTaxi,this.apellidoMotoTaxi,this.telefonoMotoTaxi,
      this.carnetIdentidadMotoTaxi,this.placaMotoTaxi,this.fechaNacimientoMotoTaxi,
      this.imagenMotoTaxi,this.idMotoTaxi);

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
