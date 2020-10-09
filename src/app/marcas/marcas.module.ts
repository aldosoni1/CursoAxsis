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
import { MaterialModule } from '@material';
import { FormsModule } from '@angular/forms';
import { EditarMarcaComponent } from './components/editar-marca/editar-marca.component';
import { EditarMarcaContainer } from './containers/editar-marca/editar-marca.container';

@NgModule({
  declarations: [
    MarcaDetailComponent,
    MarcaComponent,
    MarcasContainer,
    MarcasAdminContainer,
    RegistrarMarcaContainer,
    RegistrarMarcaComponent,
    EditarMarcaComponent,
    EditarMarcaContainer
  ],
  imports: [
    CommonModule,
    MarcasRoutingModule,
    DevextremeModule,
    FormsModule,
    MaterialModule
  ]
})
export class MarcasModule { }

