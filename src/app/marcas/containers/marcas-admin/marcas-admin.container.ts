import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MarcaModel } from '@core/models/marca.model';
import { MarcaService } from '@core/services/marca.service';
import { NotifyService } from '@core/services/notify.service';

@Component({
  selector: 'app-marcas-admin',
  templateUrl: './marcas-admin.container.html',
  styleUrls: ['./marcas-admin.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class MarcasAdminContainer implements OnInit {
  marcas: MarcaModel[];
  constructor(
    private marcaService: MarcaService,
    private notifyService: NotifyService
  ) { }

  ngOnInit(): void {
    this.fetchdata();
  }
  borrarMarca(id: string): void {
    this.marcaService.borrarMarca(id).subscribe(x => {
      this.notifyService.mostrarNotificacion('success', 'Se elimino la marca con el id: ' + id);
      this.fetchdata();
    });
  }
  fetchdata(): void {
    this.marcaService.getAllMarcas().subscribe(x => {
      this.marcas = x;
    });
  }
}
