import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListadoDatosPage } from './listado-datos.page';
import { ModalEditarRegistroPage } from '../modal-editar-registro/modal-editar-registro.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: ListadoDatosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipesModule
  ],
  declarations: [ListadoDatosPage,ModalEditarRegistroPage],
  entryComponents: [ModalEditarRegistroPage]
})
export class ListadoDatosPageModule {}
