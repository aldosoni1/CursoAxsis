import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosRoutingModule } from './autos-routing.module';
import { AutoComponent } from './components/auto/auto.component';
import { AutosContainer } from './containers/autos/autos.container';
import { AutoDetailComponent } from './components/auto-detail/auto-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { RegistrarAutoContainer } from './containers/registrar-auto/registrar-auto.container';
import { RegistrarAutoComponent } from './components/registrar-auto/registrar-auto.component';
import { AutosAdminContainer } from './containers/autos-admin/autos-admin.container';

@NgModule({
  declarations: [
    AutoComponent,
    AutoDetailComponent,
    RegistrarAutoComponent,
    AutosContainer,
    RegistrarAutoContainer,
    AutosAdminContainer
  ],
  imports: [
    CommonModule,
    AutosRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class AutosModule { }
