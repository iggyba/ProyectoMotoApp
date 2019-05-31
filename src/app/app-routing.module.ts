import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './componentes/tabs/tabs.module#TabsPageModule' },
  { path: 'confir', loadChildren: './componentes/confir/confir.module#ConfirPageModule' },
  { path: 'tabs', loadChildren: './componentes/tabs/tabs.module#TabsPageModule' },
  { path: 'tab2', loadChildren: './componentes/tab2/tab2.module#Tab2PageModule'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
