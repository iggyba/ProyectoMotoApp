import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth) { }

  login(email:string,password:string){

  return new Promise((resolve,reject)=>{
    this.AFauth.auth.signInWithEmailAndPassword(email,password).then(usuario => {
      resolve(usuario);
    }).catch(err => reject(err));
  });

  
  }
}
