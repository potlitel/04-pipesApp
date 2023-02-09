import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicoComponent } from './ventas/pages/basico/basico.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

const routes: Routes = [
  {
    path:'',
    component: BasicoComponent,
    pathMatch: 'full'
  },
  {
    path:'numeros',
    component: NumerosComponent
  },
  {
    path:'no-comunes',
    component: NoComunesComponent
  },
  {
    path:'ordenar',
    component: OrdenarComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
