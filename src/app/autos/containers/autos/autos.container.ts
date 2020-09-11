import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Auto } from '@core/models/auto.model';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.container.html',
  styleUrls: ['./autos.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class AutosContainer implements OnInit, OnChanges {
  autos: Auto[] = [
    {
      año: 2020,
      descripcion: 'Es un auto veloz',
      id: '1',
      modelo: 'Modelo Advance',
      nombre: 'BMW',
      imagen: '../../../assets/images/imagen1.jpg'
    },
    {
      año: 2020,
      descripcion: 'Es un auto veloz',
      id: '2',
      modelo: 'Modelo Advance',
      nombre: 'Bentley',
      imagen: '../../../assets/images/imagen2.jpg'
    },
    {
      año: 200,
      descripcion: 'Es un auto veloz',
      id: '3',
      modelo: 'Modelo Advance',
      nombre: 'Ferrary',
      imagen: '../../../assets/images/imagen2.jpg'
    },
    {
      año: 200,
      descripcion: 'Es un auto veloz',
      id: '4',
      modelo: 'Modelo Advance',
      nombre: 'Porch',
      imagen: '../../../assets/images/imagen2.jpg'
    }
  ];
  contador = 0;
  constructor() {
    console.log('1.Constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('2.OnChanges');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('3.Ng on Init');
  }
  addCarrosVendidos(): void {
    this.contador++;
  }

}
