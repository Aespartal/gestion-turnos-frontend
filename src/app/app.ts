import { Component, signal } from '@angular/core';
import { ListaCitasComponent } from "./components/lista-citas/lista-citas";

@Component({
  selector: 'app-root',
  imports: [ListaCitasComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('gestion-turnos-front');
}
