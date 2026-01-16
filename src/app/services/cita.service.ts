import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cita {
  id: number;
  clienteNombre: string;
  servicio: string;
  fechaHora: string;
}

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private API_URL = 'http://185.253.153.171:8080/api/citas';

  constructor(private http: HttpClient) { }

  listarCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(this.API_URL);
  }

  guardarCita(cita: Omit<Cita, 'id'>): Observable<Cita> {
    return this.http.post<Cita>(this.API_URL, cita);
  }
}
