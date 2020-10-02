import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaDetailComponent } from './components/marca-detail/marca-detail.component';
import { MarcaComponent } from './components/marca/marca.component';
import { MarcasContainer } from './containers/marcas/marcas.container';
import { MarcasRoutingModule } from './marcas-routing.module';
import { MarcasAdminContainer } from './containers/marcas-admin/marcas-admin.container';
import { RegistrarMarcaContainer } from './containers/registrar-marca/registrar-marca.container';
import { RegistrarMarcaComponent } from './components/registrar-marca/registrar-marca.component';
import { DevextremeModule } from '@devextreme';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MarcaDetailComponent,
    MarcaComponent,
    MarcasContainer,
    MarcasAdminContainer,
    RegistrarMarcaContainer,
    RegistrarMarcaComponent
  ],
  imports: [
    CommonModule,
    MarcasRoutingModule,
    DevextremeModule,
    FormsModule
  ]
})
export class MarcasModule { }
