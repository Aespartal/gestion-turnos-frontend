import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CitasService } from '../../services/cita.service';
import { Cita, CitaCreate } from '../../models/cita.model';
import { FormularioCitaComponent } from '../formulario-cita/formulario-cita';

@Component({
  selector: 'app-lista-citas',
  standalone: true,
  imports: [CommonModule, DatePipe, FormularioCitaComponent],
  templateUrl: './lista-citas.html',
  styleUrls: ['./lista-citas.scss']
})
export class ListaCitasComponent implements OnInit {
  citas: Cita[] = [];
  loading = false;
  error: string | null = null;
  guardando = false;
  mensajeExito: string | null = null;

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.cargarCitas();
  }

  cargarCitas(): void {
    this.loading = true;
    this.error = null;

    this.citasService.listarCitas().subscribe({
      next: (data: Cita[]) => {
        console.log('Citas recibidas:', data);
        this.citas = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error completo:', err);
        this.error = this.getErrorMessage(err);
        this.loading = false;
      },
      complete: () => {
        console.log('Petición completada');
      }
    });
  }

  private getErrorMessage(err: any): string {
    if (err.status === 0) {
      return 'Error de conexión. Verifica que el servidor esté disponible y CORS configurado.';
    }
    return err.message || 'Error al cargar las citas';
  }

  onCitaCreada(cita: CitaCreate): void {
    this.guardando = true;
    this.error = null;
    this.mensajeExito = null;

    this.citasService.guardarCita(cita).subscribe({
      next: (nuevaCita: Cita) => {
        this.citas = [...this.citas, nuevaCita];
        this.guardando = false;
        this.mensajeExito = 'Cita creada exitosamente';

        // Limpiar mensaje después de 3 segundos
        setTimeout(() => {
          this.mensajeExito = null;
        }, 3000);
      },
      error: (err) => {
        this.error = err.message || 'Error al crear la cita';
        this.guardando = false;
        console.error('Error creando cita:', err);
      }
    });
  }
}
