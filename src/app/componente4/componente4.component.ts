import { Component } from '@angular/core';

@Component({
  selector: 'app-componente4',
  standalone: true,
  imports: [],
  template: `<button (click)="greet()"> {{message}} </button>`,
  styles:
  `
button {
  background-color: #4CAF50; /* Color de fondo */
  color: black; /* Color de texto */
  padding: 10px 20px; /* Relleno interno del botón */
  border: none; /* Sin borde */
  border-radius: 5px; /* Bordes redondeados */
  width: 150px;
  cursor: pointer; /* Cambiar cursor al pasar sobre el botón */
}
button:hover {
  background-color: orange; /* Cambiar color de fondo al pasar el ratón */
  color:white;
  font-weight: bold;
}
  `
})
export class Componente4Component {
  message = 'Brigitte Padilla';

  greet() {
    console.log('Hello, there');
}
}
