import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent, } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: 'navbar', component: NavbarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'education', component: EducationComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'workExp', component: ExperienceComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioWebsiteRoutingModule { }
