import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private API_URL = 'http://185.253.153.171:8080/api/citas';

  constructor(private http: HttpClient) { }

  listarCitas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }

  guardarCita(cita: any): Observable<any> {
    return this.http.post<any>(this.API_URL, cita);
  }
}
