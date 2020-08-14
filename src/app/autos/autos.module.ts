import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosRoutingModule } from './autos-routing.module';
import { AutoComponent } from './components/auto/auto.component';
import { AutosComponent } from './components/autos/autos.component';
import { AutoDetailComponent } from './components/auto-detail/auto-detail.component';

@NgModule({
  declarations: [
    AutoComponent,
    AutosComponent,
    AutoDetailComponent
  ],
  imports: [
    CommonModule,
    AutosRoutingModule
  ]
})
export class AutosModule { }
