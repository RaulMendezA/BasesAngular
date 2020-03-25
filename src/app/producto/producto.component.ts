import { Component, OnInit } from '@angular/core';

import { Product } from './Producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  busqueda = "";
  activar = false;

  productos: Product[];

  resBusqueda = this.productos;

  existencia = false;
  ordenar = false;
  ex3 = false;
  //: https://picsum.photos/id/1/100/100

  constructor() {
    this.productos = [new Product(12, "Smartphone", "LG", "Quadcore 3GHZ", 12018.5, 5),
    new Product(123, "Smartwatch", "Sony", "3GB Ram", 4999.9, 0),
    new Product(35, "SmartTV", "Sony", "52 pulgadas, Conexión wifi", 8999.9, 3),
    new Product(36, "SmartFridge", "Samsung", "50i3, wifi, Bluetooth", 1999.9, 5),
    new Product(37, "SmartStuff", "Apple", "Muchas pulgadas, Conexión wifi", 5999.9, 1)]
  }

  ngOnInit(): void {
    //this.buscar();
  }

  ////////////////
  activateButton() {
    this.activar = this.busqueda.length > 0;
  }

  buscar(): void {
    if (this.ordenar == true) {
      this.resBusqueda = this.productos.filter(o => o.nombre.toUpperCase().includes(this.busqueda.toUpperCase()) 
      || o.descripcion.toUpperCase().includes(this.busqueda.toUpperCase()) )
      .sort(function(a, b){return a.precio-b.precio});//sort((a.precio, b.precio) => a.precio - b.precio);
    } else {
      this.resBusqueda = this.productos.filter(o =>  
        o.nombre.toUpperCase().includes(this.busqueda.toUpperCase()) || o.descripcion.toUpperCase().includes(this.busqueda.toUpperCase())
        );
    }
    
  }

  onKeydown(event) {
    this.buscar();
  }

  soloExistencia(){
    this.existencia = true;
  }

}
