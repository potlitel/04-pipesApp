import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicoComponent } from './pages/basico/basico.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';




@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicoComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    NumerosComponent,
    NoComunesComponent,
    BasicoComponent,
    OrdenarComponent
  ]
})
export class VentasModule { }
