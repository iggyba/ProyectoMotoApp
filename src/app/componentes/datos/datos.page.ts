import { Component, OnInit } from '@angular/core';
import { MototaxisService, motoTaxi } from "../../servicios/mototaxis.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  public motoTaxisArreglo: any =[];
  constructor(public mototaxisService : MototaxisService, public router : Router) { }

  ngOnInit() {
    this.mototaxisService.getDatosMotoTaxis().subscribe( motoTaxis =>{
      this.motoTaxisArreglo=motoTaxis;
    })
  }

  conectar(){
    this.router.navigate(['/home']);
  }
}
