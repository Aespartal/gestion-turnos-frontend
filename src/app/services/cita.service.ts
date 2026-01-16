import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, timeout } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cita, CitaCreate } from '../models/cita.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private readonly API_URL = `${environment.apiUrl}/citas`;
  private readonly TIMEOUT = 10000; // 10 segundos

  constructor(private http: HttpClient) {}

  listarCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(this.API_URL).pipe(
      timeout(this.TIMEOUT),
      catchError(this.handleError)
    );
  }

  guardarCita(cita: CitaCreate): Observable<Cita> {
    return this.http.post<Cita>(this.API_URL, cita).pipe(
      timeout(this.TIMEOUT),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse | any): Observable<never> {
    let errorMessage = 'Ocurrió un error desconocido';

    // Timeout error
    if (error.name === 'TimeoutError') {
      errorMessage = 'La petición tardó demasiado. El servidor no responde.';
    }
    else if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // Error del cliente
        errorMessage = `Error: ${error.error.message}`;
      } else if (error.status === 0) {
        // Error CORS o servidor no disponible
        errorMessage = 'No se pudo conectar con el servidor. Verifica CORS o que el servidor esté activo.';
      } else {
        // Error del servidor
        errorMessage = `Error ${error.status}: ${error.message}`;
      }
    }

    console.error('Error HTTP completo:', error);
    console.error('Mensaje de error:', errorMessage);
    return throwError(() => ({ message: errorMessage, status: error.status || 0 }));
  }
}
