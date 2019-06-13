import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
     path:'',
     component:DashboardPage,
     children: [
       { path:'ubicacion',
         children: [
           {   path:'',  loadChildren:'./ubicacion/ubicacion.module#UbicacionPageModule'  }
         ]
      },
      { path:'confir',
         children: [
           {   path:'',  loadChildren:'./confir/confir.module#ConfirPageModule'  }
         ]
      },
      {
          path:'datos',
          children: [
             {   path:'',loadChildren:'./datos/datos.module#DatosPageModule'  }
          ]
       },
      {   path:'',  redirectTo:'home',  pathMatch:'full'  }
   ]
 },
 {  path:'',  redirectTo:'home',  pathMatch:'full' }
];

@NgModule({

imports: [RouterModule.forChild(routes)],

exports: [RouterModule]

})

export class DashboardPageRoutingModule {}