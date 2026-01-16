import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CitaCreate } from '../../models/cita.model';

@Component({
  selector: 'app-formulario-cita',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-cita.html',
  styleUrls: ['./formulario-cita.scss']
})
export class FormularioCitaComponent {
  @Output() citaCreada = new EventEmitter<CitaCreate>();

  cita: CitaCreate = {
    clienteNombre: '',
    servicio: '',
    fechaHora: ''
  };

  serviciosDisponibles = [
    'Peluqueria',
    'Barbería',
    'Manicura',
    'Pedicura',
    'Tratamiento Facial',
    'Masaje'
  ];

  submitted = false;

  onSubmit(): void {
    this.submitted = true;

    if (this.isFormValid()) {
      this.citaCreada.emit({ ...this.cita });
      this.resetForm();
    }
  }

  isFormValid(): boolean {
    return !!(
      this.cita.clienteNombre.trim() &&
      this.cita.servicio &&
      this.cita.fechaHora
    );
  }

  resetForm(): void {
    this.cita = {
      clienteNombre: '',
      servicio: '',
      fechaHora: ''
    };
    this.submitted = false;
  }
}
