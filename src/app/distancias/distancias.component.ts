import { Component } from '@angular/core';
import { calcularDistancia } from './distanciA'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-distancias',
  standalone: false,
  templateUrl: './distancias.component.html',
  styleUrl: './distancias.component.css'
})
export class DistanciasComponent {
  x1: number=0;
  y1: number=0;
  x2: number=0;
  y2: number=0;
  resultado: number= 0  

  calcular(): void{

    this.resultado = calcularDistancia(this.x1, this.y1, this.x2, this.y2);

  }

}
