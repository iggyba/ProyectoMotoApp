import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardauthGuard } from "./servicios/guardauth.guard";

const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
   {path: 'dashboard',loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule'},
  // { path: 'second/:price', loadChildren: './second/second.module#SecondPageModule' },
  // { path: 'confir', loadChildren: './componentes/confir/confir.module#ConfirPageModule' },
  // { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [GuardauthGuard] },
  // { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
  // { path: 'datos', loadChildren: './componentes/datos/datos.module#DatosPageModule', canActivate: [GuardauthGuard] },
    { path: 'registros', loadChildren: './componentes/registros/registros.module#RegistrosPageModule' },
  // { path: 'ubicacion', loadChildren: './componentes/ubicacion/ubicacion.module#UbicacionPageModule', canActivate: [GuardauthGuard] },
   { path: 'menu-registros', loadChildren: './componentes/menu-registros/menu-registros.module#MenuRegistrosPageModule' },
   { path: 'listado-datos', loadChildren: './componentes/listado-datos/listado-datos.module#ListadoDatosPageModule' },
   { path: 'modal-editar-registro', loadChildren: './componentes/modal-editar-registro/modal-editar-registro.module#ModalEditarRegistroPageModule', canActivate: [GuardauthGuard] },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
