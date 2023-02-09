import { Component } from '@angular/core';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.css']
})
export class BasicoComponent {

  nombreLower: string = 'alain';
  nombreUpper: string = 'ALAIN';
  nombreCompleto: string = 'aLAin jORge aCuñA';

  fecha: Date = new Date();

}
