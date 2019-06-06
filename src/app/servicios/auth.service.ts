import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { reject } from 'q';
import { auth } from 'firebase';
import { AngularFirestore } from "@angular/fire/firestore";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public idUsuario: string;


  constructor(private AFauth: AngularFireAuth, private db: AngularFirestore) { }

  login(email: string, password: string) {

    return new Promise((resolve, reject) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(usuario => {
        this.idUsuario = usuario.user.uid;
        resolve(usuario.user.uid);
      }).catch(err => reject(err));
    });


  }

  getUidUser() {
    return this.idUsuario;
  }


  registrarMotoTaxi(nombre: string, apellido: string, telefono: string, placa: string, email: string, password: string, imagen: string) {
    return new Promise((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
      const uid = res.user.uid;
      this.db.collection('motoTaxis').doc(uid).set({
        nombreMotoTaxi:nombre,
        apellidoMotoTaxi:apellido,
        telefonoMotoTaxi: telefono,
        placaMotoTaxi: placa,
        imagenMotoTaxi:imagen,
        disponible: false,
        uid: uid
      })
      alert("Moto Taxista registrado con éxito");
      }).catch(err => reject(err));
    });
  }

}
