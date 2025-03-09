import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-css-testing',
  standalone: true,
  templateUrl: './css-testing.component.html',
  imports: [
    RouterOutlet
  ],
  styleUrl: './css-testing.component.css'
})
export class CssTestingComponent {
}
