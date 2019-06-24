import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { reject } from 'q';
import { auth } from 'firebase';
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { MototaxisService} from "../servicios/mototaxis.service";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public  idUsuario: string;


  constructor(private AFauth: AngularFireAuth, 
              private db: AngularFirestore,
              public router : Router,
              public mototaxisService : MototaxisService) { }

  login(email: string, password: string) {

    return new Promise((resolve, reject) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(usuario => {
        
        this.idUsuario = usuario.user.uid;
        this.mototaxisService.cambiarDisponibilidadTrue(this.idUsuario);
        resolve(usuario.user.uid);
      }).catch(err => reject(err));
    });


  }

  getUidUser() {
    return this.idUsuario;
  }


  registrarMotoTaxi(nombre: string, apellido: string, telefono: string, placa: string, 
    email: string, password: string, imagen: string,carnet:string,fechanacimiento:Date) {
      
    return new Promise((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
      const uid = res.user.uid;
      this.db.collection('motoTaxis').doc(uid).set({
        nombreMotoTaxi:nombre,
        apellidoMotoTaxi:apellido,
        telefonoMotoTaxi: telefono,
        placaMotoTaxi: placa,
        imagenMotoTaxi:imagen,
        carnetIdentidadMotoTaxi:carnet,
        fechaNacimientoMotoTaxi:fechanacimiento,
        disponible: false,
        uid: uid
      })
      this.router.navigate(['/menu-registros']);
      alert("Moto Taxista registrado con éxito");
      }).catch(err => reject(err));
    });
  }

  logout(){
    this.AFauth.auth.signOut().then(() =>{
    this.router.navigate(['/login']);
    })
  }
}
