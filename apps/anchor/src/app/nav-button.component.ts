import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'nav-button',
  template: `
    <a [routerLink]="[href]" [fragment]="fragment" class="nav-button">
      <ng-content></ng-content>
    </a>
  `,
  styles: [`
    .nav-button {
      display: inline-block;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border-radius: 5px;
      text-decoration: none;
    }
    .nav-button:hover {
      background-color: #0056b3;
    }
  `]
})
export class NavButtonComponent {
  @Input() href: string = '';  // Provide a default value
  @Input() fragment: string = '';  // Provide a default value
}
