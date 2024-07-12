import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraSalarioComponent } from './components/calculadora-salario/calculadora-salario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculadoraSalarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora-pagos';
}
