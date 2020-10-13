import { Component, OnInit } from '@angular/core';
import { Objeto } from '../formulario/formulario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  desc:string = "";      //descripcion si es un ingreso.
  definicion:string="";  //descripcion si es un egreso.
  ingre:number = 0;     //valor de cada ingreso.
  egre:number = 0;      //valor de cada egreso.
  presupuesto:number = 0;   //valor total del prosupuesto. Ingresos - Egresos
  contador_ingresos:number = 0; //valor total de los ingresos.
  contador_egresos:number = 0;  //valor total de los egresos.

  
  llenar:Objeto[] = [];
  rellenar:Objeto[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  alerta(item1:Objeto){

    if (item1.valor < 0) {

      this.definicion = item1.descripcion;
      this.egre = item1.valor * -1;
      this.contador_egresos = this.contador_egresos + item1.valor*-1;
      let objeto = new Objeto(this.definicion,this.egre);
      this.rellenar.push(objeto);

    } else {

      this.desc = item1.descripcion;
      this.ingre = item1.valor;
      this.contador_ingresos = this.contador_ingresos + item1.valor;
      let objeto2 = new Objeto(this.desc,this.ingre);
      this.llenar.push(objeto2);

    }

    this.presupuesto = this.contador_ingresos - this.contador_egresos;
  }

}
