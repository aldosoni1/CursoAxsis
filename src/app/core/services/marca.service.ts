import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments';
import { MarcaInputModel } from '@core/models/marcaInput.model';
import { MarcaModel } from '@core/models/marca.model';
import { Observable } from 'rxjs';
import { NotifyService } from './notify.service';
import { MarcaEditModel } from '@core/models/marcaEdit.model';
@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(
    private http: HttpClient,
    private notifyService: NotifyService
  ) { }
  registrarMarca(marcaModel: MarcaInputModel): void {
    console.log(marcaModel.nombre);
    this.http.post(`${environment.UrlApi}Marca`, marcaModel).subscribe(x => {
      console.log(x);
    });
  }
  getAllMarcas(): Observable<MarcaModel[]> {
    return this.http.get<MarcaModel[]>(`${environment.UrlApi}Marca`);
  }
  borrarMarca(id: string): Observable<Object> {
    return this.http.delete(`${environment.UrlApi}Marca/${id}`);
  }
  editarMarca(editModel: MarcaEditModel): Observable<Object> {
    return this.http.patch(`${environment.UrlApi}Marca`, editModel);
  }
}
