import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from "rxjs/operators";

interface pedidos {
  cliente: string;
  estado: string;
  idPedido: string;
}

@Component({
  selector: 'app-confir',
  templateUrl: './confir.page.html',
  styleUrls: ['./confir.page.scss'],
})
export class ConfirPage implements OnInit {

  public pedidosArreglo: any =[];
  id_doc : string;
  constructor( public router : Router, private db: AngularFirestore) {}

  ngOnInit()
  {
    this.getDatosPedido().subscribe( pedidos => {
      this.pedidosArreglo=pedidos;
    });
  }

  updateEstado(){
    this.db.collection('pedidosMotos').doc(this.id_doc).update({
      estadoPedido:'entregado'
    })
  }

  getDatosPedido()
  {
    return this.db.collection('pedidosMotos', ref => ref.where('estadoPedido','==','no entregado')).snapshotChanges().pipe(map(pedidos=> {
      return pedidos.map(ped=> {
        const data = ped.payload.doc.data() as pedidos;
        data.idPedido = ped.payload.doc.id;
        this.id_doc = ped.payload.doc.id;
        return data;
      })
    }))
  }
}