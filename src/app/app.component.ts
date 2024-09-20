import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './portfolio-website/navbar/navbar.component';
import { ResponsiveDirectiveDirective } from './responsive-directive.directive';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, ResponsiveDirectiveDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myPortfolio';


  constructor(){

  }
 
}
