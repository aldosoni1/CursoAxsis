import { Component, OnInit } from '@angular/core';
import { AutoViewModel, CatalogoViewModel, MarcaViewModel, MarcaService, AutoService, AutoInputModel } from '@core/services/api.service';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { environment } from '@environments';
import { NotifyService } from '@core/services/notify.service';
@Component({
  selector: 'app-registrar-auto',
  templateUrl: './registrar-auto.container.html',
  styleUrls: ['./registrar-auto.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class RegistrarAutoContainer implements OnInit {
  marcasArray: CatalogoViewModel[];
  public hubConnection: HubConnection;
  autoInputModel: AutoInputModel = {
    marcaId: '',
    fechaEsamble: new Date(),
    precioMercado: 0,
    nombre: '',
    numeroMotor: ''
  };
  constructor(
    private marcaService: MarcaService,
    private autoService: AutoService,
    private notifyService: NotifyService
  ) { }

  ngOnInit(): void {
    this.fetchMarcas();
    // this.hubConnection = new HubConnectionBuilder().withUrl(environment.UrlHub + 'Notificacion').build();
    // this.hubConnection.on('RegistroAuto', (mensaje) => {
    //   this.notifyService.mostrarNotificacion('success', 'Se registro el auto: ' + mensaje);
    // });
    // this.hubConnection.start()
    //   .then(() => {
    //     console.log('Conexión establecida');
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  }
  registrarAuto(e): void {
    e.preventDefault();
    this.autoService.registrar(this.autoInputModel).subscribe(x => {
      console.log(x);
    });

  }
  fetchMarcas(): void {
    this.marcaService.getMarcas().subscribe(x => {
      this.marcasArray = x;
    });
  }

}
