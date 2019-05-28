import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { reject } from 'q';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public idUsuario:string;
  constructor(private AFauth : AngularFireAuth) { }

  login(email:string,password:string){

  return new Promise((resolve,reject)=>{
    this.AFauth.auth.signInWithEmailAndPassword(email,password).then(usuario => {
      this.idUsuario=usuario.user.uid;
      resolve(usuario.user.uid);
    }).catch(err => reject(err));
  });

  
  }

  getUidUser(){
    return this.idUsuario;
  }
}
