import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  standalone: true,
  imports: [],
  template: `<div [contentEditable]="isEditable"></div>`,
  styles: `
  :host{
    display:block;
    border: 3px solid purple;
  }
  .editable-content {
      /* Estilos específicos para el contenido editable */
      min-height: 50px; /* Ejemplo de estilo adicional */
    }
  `
})
export class Componente3Component {
  isEditable = true;
}
