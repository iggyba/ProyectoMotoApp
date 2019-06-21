import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu-registros',
  templateUrl: './menu-registros.page.html',
  styleUrls: ['./menu-registros.page.scss'],
})
export class MenuRegistrosPage implements OnInit {

  constructor( public router : Router) { }

  ngOnInit() {
  }


  registrarNuevoMotoTaxi(){
    this.router.navigate(['/registros']);
  }

  listarMotoTaxis(){
    this.router.navigate(['/listado-datos']);
  }
}
