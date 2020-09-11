import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaDetailComponent } from './components/marca-detail/marca-detail.component';
import { MarcaComponent } from './components/marca/marca.component';
import { MarcasContainer } from './containers/marcas/marcas.container';
import { MarcasRoutingModule } from './marcas-routing.module';
import { MarcasAdminContainer } from './containers/marcas-admin/marcas-admin.container';


@NgModule({
  declarations: [
    MarcaDetailComponent,
    MarcaComponent,
    MarcasContainer,
    MarcasAdminContainer
  ],
  imports: [
    CommonModule,
    MarcasRoutingModule
  ]
})
export class MarcasModule { }
