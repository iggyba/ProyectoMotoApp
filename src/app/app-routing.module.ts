import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
=======
  { path: '', loadChildren: './componentes/tabs/tabs.module#TabsPageModule' },
>>>>>>> parent of 64ca764... Merge remote-tracking branch 'origin/branch2fabri' into sammy
=======
  { path: '', loadChildren: './componentes/tabs/tabs.module#TabsPageModule' },
>>>>>>> parent of 64ca764... Merge remote-tracking branch 'origin/branch2fabri' into sammy
=======
  { path: '', loadChildren: './componentes/tabs/tabs.module#TabsPageModule' },
>>>>>>> parent of 64ca764... Merge remote-tracking branch 'origin/branch2fabri' into sammy
  { path: 'confir', loadChildren: './componentes/confir/confir.module#ConfirPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
