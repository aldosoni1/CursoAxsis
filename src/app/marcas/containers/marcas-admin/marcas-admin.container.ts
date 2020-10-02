import { Component, OnInit } from '@angular/core';
import { MarcaModel } from '@core/models/marca.model';
import { MarcaService } from '@core/services/marca.service';

@Component({
  selector: 'app-marcas-admin',
  templateUrl: './marcas-admin.container.html',
  styleUrls: ['./marcas-admin.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class MarcasAdminContainer implements OnInit {
  marcas: MarcaModel[];
  constructor(
    private marcaService: MarcaService
  ) { }

  ngOnInit(): void {
    this.marcaService.getAllMarcas().subscribe(x => {
      this.marcas = x;
    });
  }

}
