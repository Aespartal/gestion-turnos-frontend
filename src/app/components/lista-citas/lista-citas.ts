import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CitasService, Cita } from '../../services/cita.service';

@Component({
  selector: 'app-lista-citas',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './lista-citas.html',
  styleUrls: ['./lista-citas.scss']
})
export class ListaCitasComponent implements OnInit {
  citas: Cita[] = [];

  constructor(
    private citasService: CitasService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.citasService.listarCitas().subscribe({
      next: (data: Cita[]) => {
        console.log('Datos recibidos:', data);
        this.citas = [...data];
        console.log('Citas asignadas:', this.citas);
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error cargando citas:', err)
    });
  }
}
