import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes :string[] = ['Maria','Pedro','Alain'];
  clientesMapa = {
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos 1 cliente esperando.',
    'other':'tenemos # clientes esperando.'
  }

  cambiarCliente():void{
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  borrarCliente():void{
    this.clientes.pop();
  }

  //Keyvalue pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Cánada'
  }
}
