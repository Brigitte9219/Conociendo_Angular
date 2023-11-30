import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './componente1/user.component';
import { RepetirComponent } from './componente2/repetir.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, RepetirComponent, Componente3Component, Componente4Component],
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
