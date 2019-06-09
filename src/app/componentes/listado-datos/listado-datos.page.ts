import { Component, OnInit } from '@angular/core';
import { MototaxisService } from "../../servicios/mototaxis.service";

@Component({
  selector: 'app-listado-datos',
  templateUrl: './listado-datos.page.html',
  styleUrls: ['./listado-datos.page.scss'],
})
export class ListadoDatosPage implements OnInit {

  public motoTaxisArreglo: any = [];

  constructor(public mototaxisService: MototaxisService) { }

  ngOnInit() {
    this.mototaxisService.getDatosMotoTaxis().subscribe( motoTaxis =>{
      this.motoTaxisArreglo=motoTaxis;
    })
  }

}
