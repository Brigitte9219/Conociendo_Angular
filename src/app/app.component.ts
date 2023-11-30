import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RepetirComponent } from './repetir/repetir.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, RepetirComponent],
  templateUrl: './app.component.html',
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
