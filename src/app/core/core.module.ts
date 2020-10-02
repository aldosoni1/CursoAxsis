import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { StorageService } from './services/storage.service';
import { NotifyService } from './services/notify.service';
import { MarcaService } from './services/marca.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    StorageService,
    NotifyService,
    MarcaService
  ]
})
export class CoreModule { }
