import { Component, OnInit, Input } from '@angular/core';
import { Objeto } from '../formulario/formulario.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  @Input() det:Objeto;

  constructor() { }

  ngOnInit(): void {
  }
}
