import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxFormModule,
  DxDateBoxModule,
  DxTextAreaModule,
  DxSelectBoxModule,
  DxTextBoxModule
} from 'devextreme-angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxFormModule,
    DxDateBoxModule,
    DxTextAreaModule,
    DxSelectBoxModule,
    DxTextBoxModule
  ],
  exports: [
    DxFormModule,
    DxDateBoxModule,
    DxTextAreaModule,
    DxSelectBoxModule,
    DxTextBoxModule

  ]
})
export class DevextremeModule { }
