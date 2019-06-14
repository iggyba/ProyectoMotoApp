import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenumetamorfoPage } from './menumetamorfo.page';

const routes: Routes = [
  {
    path: '',
    component: MenumetamorfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenumetamorfoPage]
})
export class MenumetamorfoPageModule {}
