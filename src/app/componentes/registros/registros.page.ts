import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs/internal/observable";
import { Router } from "@angular/router";
import { FotosService } from "../../servicios/fotos.service";
import { LoadingController } from '@ionic/angular';
import { from } from 'rxjs';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { NavController, } from '@ionic/angular'
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {


  nombreMotoTaxi: string;
  apellidoMotoTaxi: string;
  telefonoMotoTaxi: string;
  placaMotoTaxi: string;
  carnetIdentidadMotoTaxi: string;
  fechaNacimientoMotoTaxi: Date;
  email: string;
  password: string;
  imagenMotoTaxi: any;

  urlImagen: Observable<string>;

  archivo: any;
  rutaArchivo: string;
  image: any;
  myModelo: any;

  constructor(private authService: AuthService,
    private AFStorage: AngularFireStorage,
    public router: Router,
    private fotosService: FotosService,
    private loadingController: LoadingController,
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) { this.myModelo = {}; }



  

 

  registrando() {
      this.authService.registrarMotoTaxi(this.nombreMotoTaxi, this.apellidoMotoTaxi, this.telefonoMotoTaxi,
      this.placaMotoTaxi, this.email, this.password, this.imagenMotoTaxi,
      this.carnetIdentidadMotoTaxi, this.fechaNacimientoMotoTaxi).then(res => {
      this.nombreMotoTaxi = "";
      this.password = "";
      this.apellidoMotoTaxi = "";
      this.email = "";
      this.placaMotoTaxi = "";
      this.imagenMotoTaxi = "";
      this.telefonoMotoTaxi = "";
      this.carnetIdentidadMotoTaxi = "";
      this.fechaNacimientoMotoTaxi = null;
      this.image = null;
      }).catch(err => {
        alert("No se pudo registrar al moto taxista");
      })
  }

    ngOnInit() { }

  /*onUpload(e){
  
  ionViewDidLoad() { }


  

  registrando() {


    this.authService.registrarMotoTaxi(this.nombreMotoTaxi, this.apellidoMotoTaxi, this.telefonoMotoTaxi,
      this.placaMotoTaxi, this.email, this.password, this.imagenMotoTaxi,
      this.carnetIdentidadMotoTaxi, this.fechaNacimientoMotoTaxi).then(res => {

      }).catch((err) => {console.log("No se pudo registrar al moto taxista"); })




    this.nombreMotoTaxi = "";
    this.password = "";
    this.apellidoMotoTaxi = "";
    this.email = "";
    this.placaMotoTaxi = "";
    this.imagenMotoTaxi = "";
    this.telefonoMotoTaxi = "";
    this.carnetIdentidadMotoTaxi = "";
    this.urlImagen = null;
    this.fechaNacimientoMotoTaxi = null;
    this.router.navigate(['/menu-registros']);

  }
*/

  tomarFoto() {
    this.fotosService.takePicture().then(imagen => {
      this.image = imagen;
      this.imagenMotoTaxi = imagen;
    }), (err) => {
      console.log(err);
    }
     
  }
}



