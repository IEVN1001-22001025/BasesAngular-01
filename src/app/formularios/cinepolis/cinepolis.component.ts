import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  standalone: false,                    
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css'] 
})
export class CinepolisComponent {
  nombre: string = '';
  cantidadCompradores: number = 0;   
  cantidadBoletas: number = 0;       
  tarjeta: string = 'no';
  valorPagar: number = 0;

  precio: number = 12;

  procesar(): void {
    // Validaciones 
    if (this.cantidadCompradores <= 0) {
      alert('Ingresa la cantidad de compradores');
      return;
    }
    if (this.cantidadBoletas <= 0) {
      alert('Ingresa la cantidad de boletas');
      return;
    }

    
    const maximo = this.cantidadCompradores * 7;
    if (this.cantidadBoletas > maximo) {
      alert('7 boletos por persona. ');
      return;
    }

    
    let total = this.cantidadBoletas * this.precio;

    // Descuentos 
    if (this.cantidadBoletas >= 6) {
      total = total - (total * 0.15);   // 15
    } else if (this.cantidadBoletas >= 3) {
      total = total - (total * 0.10);   // 10
    }

    // tarjeta
    if (this.tarjeta == 'si') {
      total = total - (total * 0.10);   // 10
    }

    this.valorPagar = total;

    alert('El total a pagar es: ' + this.valorPagar);
  }
}
