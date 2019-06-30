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
  image: any;
  myModelo: any;

  constructor(private authService: AuthService,
    private AFStorage: AngularFireStorage,
    public router: Router,
    private fotosService: FotosService,
    private loadingController: LoadingController,
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {
    this.myModelo = {};
  }





  ionViewDidLoad() { }

  ngOnInit() { }

  registrando() { 

    this.nombreMotoTaxi=this.myModelo.nombreMotoTaxi;
    this.apellidoMotoTaxi=this.myModelo.apellidoMotoTaxi;
    this.telefonoMotoTaxi=this.myModelo.telefonoMotoTaxi;
    this.placaMotoTaxi=this.myModelo.placaMotoTaxi;
    this.fechaNacimientoMotoTaxi=this.myModelo.fechaNacimientoMotoTaxi;
    this.password=this.myModelo.password;
    this.email=this.myModelo.email;
    this.carnetIdentidadMotoTaxi=this.myModelo.carnetIdentidadMotoTaxi;

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



  tomarFoto() {
    this.fotosService.takePicture().then(imagen => {
      this.image = imagen;
      this.imagenMotoTaxi = imagen;
    }), (err) => {
      console.log(err);
    }

  }

  volver(){
    this.router.navigate(['/menu-registros']);
  }
}



