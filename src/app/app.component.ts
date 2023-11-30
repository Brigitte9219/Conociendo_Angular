import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: "Hello Universe",
  styles: `
  :host{
    color: #a144eb;
  }
  `
})
export class AppComponent {
  title = 'probando';
}
