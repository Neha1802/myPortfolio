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

}
