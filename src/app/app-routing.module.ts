import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
  { path: 'datos', loadChildren: './componentes/datos/datos.module#DatosPageModule' },
  { path: 'registros', loadChildren: './componentes/registros/registros.module#RegistrosPageModule' },
  { path: 'ubicacion', loadChildren: './componentes/ubicacion/ubicacion.module#UbicacionPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

