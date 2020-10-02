import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersContainer } from './containers/users/users.container';
import { UserComponent } from './components/user/user.component';
import { LoginContainer } from './containers/login/login.container';
import { DevextremeModule } from '@devextreme';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    UserDetailComponent, 
    UsersContainer, 
    UserComponent, 
    LoginContainer, 
    LoginComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    DevextremeModule
  ]
})
export class UsersModule { }
