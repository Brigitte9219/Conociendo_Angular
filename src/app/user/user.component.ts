import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: `
  @if(isServerRuning){
    <p>Welcome back, friend!</p>
    <span>Yes, the server is running</span>
  }@else {
    <span>No, the server is not running</span>
  }
  `,
  styleUrl: './user.component.css'
})
export class UserComponent {
isServerRuning= true;
}
