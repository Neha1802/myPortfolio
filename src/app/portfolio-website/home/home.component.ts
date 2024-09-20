import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import { EducationComponent } from '../education/education.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../../footer/footer.component';
import { ResponsiveDirectiveDirective } from '../../responsive-directive.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,AboutComponent,ExperienceComponent,SkillsComponent,EducationComponent,ContactComponent,FooterComponent,
    ResponsiveDirectiveDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
