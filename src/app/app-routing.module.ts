import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
  { path: 'datos', loadChildren: './componentes/datos/datos.module#DatosPageModule' },
  { path: 'confir', loadChildren: './componentes/confir/confir.module#ConfirPageModule' },
  { path: 'tabs', loadChildren: './componentes/tabs/tabs.module#TabsPageModule' },
  { path: 'registros', loadChildren: './componentes/registros/registros.module#RegistrosPageModule' },

=======
  { path: '', redirectTo: 'confirmacion', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'confir', loadChildren: './componentes/confir/confir.module#ConfirPageModule' },
>>>>>>> parent of 6eb2e22... app con tabs
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
