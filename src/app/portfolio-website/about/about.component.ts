import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ResponsiveDirectiveDirective } from '../../responsive-directive.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ResponsiveDirectiveDirective ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


  constructor(private route: ActivatedRoute){
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
    });
  }

}
