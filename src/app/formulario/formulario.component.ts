import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Objeto } from './formulario.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() emisor = new EventEmitter<Objeto>();

  descrip:string;

  valor:number;
  seleccionado:string;

  opciones:string[] = ["+","-"];

  constructor() { }

  ngOnInit():void {
  }

  enviar(){
    this.seleccionado;


    if(this.descrip == "" || !this.valor){

      alert("La Descripcion o el Valor estan vacios.");

    } else {

      if(this.seleccionado == "+"){
        let item1 = new Objeto(this.descrip, this.valor);
        this.emisor.emit(item1);
      }
      
      if(this.seleccionado == "-"){
        let item1 = new Objeto(this.descrip, -this.valor);
        this.emisor.emit(item1);
      }

    }
    
  }
}
