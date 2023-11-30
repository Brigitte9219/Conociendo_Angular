import { Component } from '@angular/core';

@Component({
  selector: 'app-componente5',
  standalone: true,
  imports: [],
  template: `
  <section>
    There's a secret message for you, hover to reveal 👀
    {{ message }}
  </section>
`,
  styleUrl: './componente5.component.css'
})
export class Componente5Component {
  message = 'CROYDON';

  onMouseOver() {
     this.message = 'Way to go 🚀';
  }
}
