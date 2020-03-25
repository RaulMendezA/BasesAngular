import { Component, OnInit } from '@angular/core';
import { throwStatement, thisTypeAnnotation } from '@babel/types';

@Component({
  selector: 'app-test',
  template: `
    <p class = "{{temp}}" [hidden]="!mostrarParrafo" (click)="cambiarVariable()">
      test works!
    </p>

    <input type="text" [value]="valorInput" (input)= "valorInput=$event.target.value" >
    <p>{{valorInput}}</p>
    <br>
    
    <input 
    type="text" 
    [(ngModel)]="busqueda" 
    (input)="buscar()" >
    <p>{{resBusqueda | json}}</p>

    <input id="inBtn"
    type="text" 
    
    (input)="activar()" >
    <button [hidden]="hid">Hacer cosas</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  temp = "display-4";
  mostrarParrafo = false;

  objetos = [{id:1, name:"John M"}, {id:2, name:"Mary"}];


  valorInput = "inicializado";
  busqueda="";
  resBusqueda = this.objetos;

  bValue="";
  hid = false;
  

  // {{}} : string interpolation - para string
  // [] : property binding, para bools, porque una string es always true, string vacía es false
  // () para funciones

  constructor() { }

  ngOnInit(): void {
  }

  cambiarVariable():void{
    this.temp = "display- " + (Number(this.temp.split("-").pop())+1);

    /* this.mostrarParrafo = !this.mostrarParrafo;
    return this.mostrarParrafo; */
  }

  buscar():void{
    this.resBusqueda = this.objetos.filter(o=> o.name.toUpperCase().includes(this.busqueda.toUpperCase()));
  }

  activar():void{
    /* if(length(this.bValue) > 3){
      this.hid = true;
    } */
  }
}
