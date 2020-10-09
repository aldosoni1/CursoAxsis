import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MarcaInputModel } from '@core/models/marcaInput.model';

@Component({
  selector: 'app-registrar-marca',
  templateUrl: './registrar-marca.component.html',
  styleUrls: ['./registrar-marca.component.scss']
})
export class RegistrarMarcaComponent implements OnInit {
  @Input() marcaModel: MarcaInputModel;
  @Output() registrarMarcaClick: EventEmitter<any> = new EventEmitter<any>();
  isRegisterValid = true;
  marcaRegisterValidationError = {};

  constructor() { }

  ngOnInit(): void {
  }

  registrarMarcaClicked(): void {
    this.registrarMarcaClick.emit();
  }
  validateMarcaRegister(params): void {
    if (this.marcaModel.nombre === '') {
      this.marcaRegisterValidationError = { message: 'Login cannot be empty' };
      this.isRegisterValid = false;
      return;
    }
    this.isRegisterValid = true;
  }

}
