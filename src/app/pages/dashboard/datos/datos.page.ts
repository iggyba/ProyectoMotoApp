import { Component, OnInit } from '@angular/core';
import { MototaxisService, motoTaxi } from "../../../servicios/mototaxis.service";
import { Router } from "@angular/router";

import { AuthService } from "../../../servicios/auth.service";

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  public motoTaxisArreglo: motoTaxi;

  constructor(public mototaxisService : MototaxisService, public router : Router, public auth: AuthService) { }

  ngOnInit() {
      this.mototaxisService.getMototaxiUsuario(this.auth.getUidUser()).subscribe(motoTaxis =>{
      this.motoTaxisArreglo=motoTaxis;
      })
      //this.mototaxisService.getDatosMotoTaxis().subscribe( motoTaxis =>{
      //this.motoTaxisArreglo=motoTaxis;
    //})
  }

  conectar(){
    this.router.navigate(['/ubicacion']);
  }

  desconectar(){
    this.mototaxisService.cambiarDisponibilidadFalse(this.motoTaxisArreglo.idMotoTaxi);
    this.router.navigate(['/login']);
  }
}
