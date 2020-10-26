import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaFormularioComponent } from './lista-formulario/lista-formulario.component';
import { LoginComponent } from './login/login.component';
import { LoginguardGuard } from './loginguard.guard';

import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: 'login',
    component: LoginComponent,
  },
    {
      path: 'formulario',
      component: TestComponent,
      canActivate:[LoginguardGuard]
    },
    {
      path: 'lista-formulario',
      component: ListaFormularioComponent,
     canActivate:[LoginguardGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
