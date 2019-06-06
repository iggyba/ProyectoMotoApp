import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../servicios/auth.service";
import { EstadoService } from "../../servicios/estado.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auhtService: AuthService, public router : Router, public estadoService: EstadoService) { }

  email : string;
  password : string;

  ngOnInit() {
  }

  logear(){
     
     this.auhtService.login(this.email,this.password).then( res =>{
     this.router.navigate(['/datos']);
     this.email="";
     this.password="";
     this.estadoService.cambiarEstado();
     
    }).catch(err => {
      alert("Los datos introducidos fueron incorrectos");
      this.email="";
      this.password="";
    })
    }
  
}
