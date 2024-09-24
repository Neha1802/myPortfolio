import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { routeTransition } from '../../routeTransition';
import { ResponsiveDirectiveDirective } from '../../responsive-directive.directive';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    FooterComponent,
    ResponsiveDirectiveDirective
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    routeTransition
  ],
})
export class NavbarComponent {

  events: string[] = [];
  isDesktop!: boolean;


  constructor(private router: Router, protected route: ActivatedRoute) { 
  }



  home() {
    this.router.navigate(['./portfolio-website/home']);
  }
  about() {
    this.router.navigate(['./portfolio-website/about'], { fragment: 'about' });
  }
  education() {
    this.router.navigate(['./portfolio-website/education'], { fragment: 'education' });
  }
  skills() {
    this.router.navigate(['./portfolio-website/skills'], { fragment: 'skills' });
  }
  workExp() {
    this.router.navigate(['./portfolio-website/workExp'], { fragment: 'workExp' });
  }
  contact() {
    this.router.navigate(['./portfolio-website/contact'], { fragment: 'contact' });
  }

}

