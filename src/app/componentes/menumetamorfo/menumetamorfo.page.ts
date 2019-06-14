import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menumetamorfo',
  templateUrl: './menumetamorfo.page.html',
  styleUrls: ['./menumetamorfo.page.scss'],
})
export class MenumetamorfoPage implements OnInit {

  constructor(public router : Router) { }
  nombre: string;
  ngOnInit() {
  }

  desplegarloginchachas(){
    this.router.navigate(['/menumetamorfo2']);
    alert(`Bienvenido_${this.nombre}`);
  }

}
