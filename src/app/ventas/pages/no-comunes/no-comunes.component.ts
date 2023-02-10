import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  miNumero: number = 0;

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

  //Json pipe
  heroes = [
    {
      nombre:'Superman',
      vuela: true
    },
    {
      nombre:'Robin',
      vuela: false
    },
    {
      nombre:'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(5000).pipe(
    tap( () => {
      console.log('interval');
    } )
  );

  valorPromesa = new Promise( (resolve, reject) =>{
    setTimeout(() => {
      resolve('Tenemos datos de promesa');
    }, 3500);
  } );

  constructor(){
    this.miObservable.subscribe(valor => {
        this.miNumero = valor
    });
  }
}
