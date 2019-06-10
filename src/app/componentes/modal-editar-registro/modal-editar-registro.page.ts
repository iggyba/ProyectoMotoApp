import { Component, OnInit} from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-modal-editar-registro',
  templateUrl: './modal-editar-registro.page.html',
  styleUrls: ['./modal-editar-registro.page.scss'],
})
export class ModalEditarRegistroPage implements OnInit {

  constructor(private modalCtrl: ModalController, private navParam: NavParams) { }

  ngOnInit() {
    console.log(this.navParam.get('value'))
  }

  onCloseModal(){
   this.modalCtrl.dismiss();
  }
}
