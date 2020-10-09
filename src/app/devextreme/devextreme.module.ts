import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxFormModule,
  DxDateBoxModule,
  DxTextAreaModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxValidatorModule
} from 'devextreme-angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxFormModule,
    DxDateBoxModule,
    DxTextAreaModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxValidatorModule
  ],
  exports: [
    DxFormModule,
    DxDateBoxModule,
    DxTextAreaModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxValidatorModule

  ]
})
export class DevextremeModule { }
