import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente6',
  standalone: true,
  imports: [],
  template: `
    <p>The user's name is {{name}} </p>
    `,
  styleUrl: './componente6.component.css'
})
export class Componente6Component {
  @Input() name = 'Brigitte';

}
