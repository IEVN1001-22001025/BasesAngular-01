import { Component } from '@angular/core';
import { calcularResistencia } from './operacionesResistencias';

@Component({
  selector: 'app-resistencias',
  standalone: false,                           
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  
  banda1: number = 0;     
  banda2: number = 0;     
  multi: number = 1;
  tol: number = 5;
  // tabla de resultados
  color1: string = '';
  color2: string = '';
  color3: string = '';
  tolTexto: string = '';
  valorTexto: string = '';  
  valor: number = 0;
  valorMax: number = 0;
  valorMin: number = 0;

  // 
  private nombres: string[] = [
    'Negro', 'Café', 'Rojo', 'Naranja', 'Amarillo',
    'Verde', 'Azul', 'Morado', 'Gris', 'Blanco'
  ];

  //  nombre/color
  private listaMultiplicadores: number[] = [
    1, 10, 100, 1000, 10000, 100000,
    1000000, 10000000, 100000000, 1000000000
  ];

  // nombres y colores
coloresNombres = ['Negro', 'Café', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Morado', 'Gris', 'Blanco'];
coloresBg      = ['black','rgb(105, 77, 40)','red','orangered','yellow','green','blue','purple','gray','gainsboro'];
multiplicadores = [1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000];

color1Bg = '';
color2Bg = '';
color3Bg = '';

  calcular() {

  // 1) Texto y color de cada banda
  this.color1 = this.coloresNombres[this.banda1];
  this.color2 = this.coloresNombres[this.banda2];
  const idxMulti = this.multiplicadores.indexOf(this.multi);  
  this.color3 = idxMulti >= 0 ? this.coloresNombres[idxMulti] : '';

  //  fila de resultados
  this.color1Bg = this.coloresBg[this.banda1];
  this.color2Bg = this.coloresBg[this.banda2];
  this.color3Bg = idxMulti >= 0 ? this.coloresBg[idxMulti] : '';

  this.tolTexto = this.tol == 5 ? 'Dorado 5%' : 'Plateado 10%';

  // 2) 
  const base = (this.banda1 * 10) + this.banda2;  
  const valorFinal = base * this.multi;           

  // 3) Mostrar y calcular rango
  this.valorTexto = String(valorFinal);
  const delta = valorFinal * (this.tol / 100);
  this.valorMax = valorFinal + delta;
  this.valorMin = valorFinal - delta;
}

}