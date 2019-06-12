import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
 public pedidos ;
  constructor() {
    this.pedidos = [
      {
        Nombre: 'Natalia',
        Apellido: 'Dorado',
        Longitud: 4.0,
        Latitud: 36,
        numDom: 8434,
        numDept: '5B',
        Total: 85.5
      },
      {
        Nombre: 'Rafael',
        Apellido: 'Dorado',
        Longitud: 6.0,
        Latitud: 24,
        numDom: 41234,
        numDept: '4B',
        Total: 50.0
      }
    ];
  }

}
