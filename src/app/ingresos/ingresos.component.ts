import { Component, OnInit, Input } from '@angular/core';
import { Objeto } from '../formulario/formulario.model';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  
  @Input() detalle:Objeto;

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
