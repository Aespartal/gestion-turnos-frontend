import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasService } from '../../services/cita.service';

@Component({
  selector: 'app-lista-citas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-citas.html',
  styleUrls: ['./lista-citas.scss']
})
export class ListaCitasComponent implements OnInit {
  citas: any[] = [];

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.citasService.listarCitas().subscribe(data => {
      this.citas = data;
    });
  }
}
