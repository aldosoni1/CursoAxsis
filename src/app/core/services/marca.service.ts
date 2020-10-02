import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments';
import { MarcaInputModel } from '@core/models/marcaInput.model';
import { MarcaModel } from '@core/models/marca.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(
    private http: HttpClient
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
}
