import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutosContainer } from './containers/autos/autos.container';
import { AutoDetailComponent } from './components/auto-detail/auto-detail.component';
import { AutosAdminContainer } from './containers/autos-admin/autos-admin.container';
const routes: Routes = [
  {
    path: '',
    component: AutosContainer
  },
  {
    path: 'admin',
    component: AutosAdminContainer
  },
  {
    path: ':id',
    component: AutoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutosRoutingModule { }
