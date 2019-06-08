import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs/internal/observable";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {


  nombreMotoTaxi:string;
  apellidoMotoTaxi:string;
  telefonoMotoTaxi:string;
  placaMotoTaxi:string;
  carnetIdentidadMotoTaxi:string;
  fechaNacimientoMotoTaxi:Date;
  email:string;
  password:string;
  imagenMotoTaxi:string;
  

  uploadPorcentage: Observable<number>;
  urlImagen: Observable<string>;

  directoriofile: string;
  archivo: any;

  constructor(private authService : AuthService, private AFStorage : AngularFireStorage) { }

  ngOnInit() {
  }

  registrando(){
    this.authService.registrarMotoTaxi(this.nombreMotoTaxi,this.apellidoMotoTaxi,this.telefonoMotoTaxi,
    this.placaMotoTaxi,this.email,this.password,this.imagenMotoTaxi,
    this.carnetIdentidadMotoTaxi,this.fechaNacimientoMotoTaxi).then( res =>{ 
      
    }).catch(err=> {alert("No se pudo registrar al moto taxista");
  })
    
  //this.tarea.snapshotChanges().pipe(finalize(() => this.urlImagen = this.referencia.getDownloadURL())).subscribe();

  const task = this.AFStorage.upload(this.directoriofile, this.archivo);
  this.nombreMotoTaxi="";
  this.password="";
  this.apellidoMotoTaxi="";
  this.email="";
  this.placaMotoTaxi="";
  this.imagenMotoTaxi="";
  this.telefonoMotoTaxi="";
  this.carnetIdentidadMotoTaxi="";
  }

  onUpload(e){
  
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath=`${this.nombreMotoTaxi}_${this.carnetIdentidadMotoTaxi}_profile_${id}`;
    const ref = this.AFStorage.ref(filePath);
    /*const task = this.AFStorage.upload(filePath, file);
    task.snapshotChanges().pipe(finalize(() => this.urlImagen = ref.getDownloadURL())).subscribe();*/
    this.archivo=file;
    this.directoriofile=filePath;
   
  }
}
