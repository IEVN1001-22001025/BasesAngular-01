import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // es un alias con el que se manda a llamar al componente
  templateUrl: './app.component.html',//con url se invoca al archivo que va componer
  standalone: false,// esta apagado
  styleUrl: './app.component.css'// apunta al archivo de los estilos
})
export class AppComponent {
  title = ' Sam basesAngular01 ';
  duplicarNumero(valor:number):number{
    return valor*2
  }
  pelicula={
    titulo:'El padrino',
    anio:1972,
    genero:"Crimen/Drama"
  }
}
