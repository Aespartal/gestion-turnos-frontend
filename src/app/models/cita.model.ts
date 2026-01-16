export interface Cita {
  id: number;
  clienteNombre: string;
  servicio: string;
  fechaHora: string;
}

export interface CitaCreate {
  clienteNombre: string;
  servicio: string;
  fechaHora: string;
}
