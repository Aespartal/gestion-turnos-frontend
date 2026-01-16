import { Component, OnInit, signal } from '@angular/core';
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
  citas = signal<Cita[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  guardando = signal(false);
  mensajeExito = signal<string | null>(null);

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.cargarCitas();
  }

  cargarCitas(): void {
    this.loading.set(true);
    this.error.set(null);

    this.citasService.listarCitas().subscribe({
      next: (data: Cita[]) => {
        console.log('Citas recibidas:', data);
        this.citas.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error completo:', err);
        this.error.set(this.getErrorMessage(err));
        this.loading.set(false);
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
    this.guardando.set(true);
    this.error.set(null);
    this.mensajeExito.set(null);

    this.citasService.guardarCita(cita).subscribe({
      next: (nuevaCita: Cita) => {
        this.citas.update(citas => [...citas, nuevaCita]);
        this.guardando.set(false);
        this.mensajeExito.set('Cita creada exitosamente');

        // Limpiar mensaje después de 3 segundos
        setTimeout(() => {
          this.mensajeExito.set(null);
        }, 3000);
      },
      error: (err) => {
        this.error.set(err.message || 'Error al crear la cita');
        this.guardando.set(false);
        console.error('Error creando cita:', err);
      }
    });
  }
}
