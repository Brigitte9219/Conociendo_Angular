import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `Hello {{ city}}, su edad es {{21+1}}`,
  styles: `
  :host{
    color: #a144eb;
  }
  `
})
export class AppComponent {
  title = 'probando';
  city = 'San Francisco';//Se añade esta propiedad
}
