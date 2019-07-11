import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { 
    path: 'admin', 
    loadChildren: './pages/admin/admin.module#AdminPageModule',
    canLoad: [UsuarioGuard]
  },
  { 
    path: 'inicio', 
    loadChildren: './pages/tabs/tabs.module#TabsPageModule' ,
    canLoad: [UsuarioGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
