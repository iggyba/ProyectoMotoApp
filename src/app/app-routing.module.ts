import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
   {path: 'dashboard',loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule'},
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'datos', loadChildren: './componentes/datos/datos.module#DatosPageModule' },
  // { path: 'registros', loadChildren: './componentes/registros/registros.module#RegistrosPageModule' },
  // { path: 'ubicacion', loadChildren: './componentes/ubicacion/ubicacion.module#UbicacionPageModule' },
  // { path: 'second/:price', loadChildren: './second/second.module#SecondPageModule' },
  // { path: 'confir', loadChildren: './componentes/confir/confir.module#ConfirPageModule' },
  // { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
