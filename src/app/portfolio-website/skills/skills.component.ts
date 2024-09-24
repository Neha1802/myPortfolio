import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponsiveDirectiveDirective } from '../../responsive-directive.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ResponsiveDirectiveDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  currentIndexSkills: number = 0;
  currentIndexTools: number = 0;


 
  images = [
    { img: 'angular.png', title: 'CLI', description: 'Framework used to build dynamic and responsive web applications.' },
    { img: 'reactLogo.png', title: 'React', description: 'I have experience in developing dynamic and responsive user interfaces using React.' },
    { img: 'typeS.jpg', title: 'Typescript', description: 'Used while creating components, services, and directives with strong typing to ensure code reliability and maintainability. ' },
    { img: 'js.png', title: 'Javascript', description: 'Skilled in JavaScript and TpeScript for adding interactivity to web applications.' },
    { img: 'html.png', title: 'HTML', description: 'Proficient in HTML for structuring and organizing web content.' },
    { img: 'css.png', title: 'CSS', description: 'Experienced in CSS for designing and styling web pages.' },
    { img: 'tailwind.png', title: 'Tailwind', description: 'Used this css to create highly customizable, responsive, and modern web designs.' },
    { img: 'rxjs.png', title: 'RxJS', description: 'Used in Angular for managing asynchronous data streams and events.' }
  ];
  imagesTools = [
    { img: 'nodeJs.png', title: 'Node.js', description: 'Used to run the Angular CLI and other development tools. Used npm to manage Angular’s dependencies and 3rd-party libraries.' },
    { img: 'postman.png', title: 'Postman', description: 'Used for testing API endpoints that are consumed by Angular services.' },
    { img: 'netlify.png', title: 'Netlify', description: 'Used for deployment of Angular apps.' },
    { img: 'bitbucket.png', title: 'BitBucket', description: 'Git repository hosting service that allows to manage Angular project. Used to track changes, collaborate with team members.' },
    { img: 'jira.png', title: 'Jira', description: 'Used for Agile methodologies (Scrum), allowing to manage sprints, backlogs, and track progress using boards and charts.' },
    { img: 'git.png', title: 'Git', description: 'Proficient in Git for version control and collaboration.' },
    { img: 'azureDevops.png', title: 'Azure Devops', description: 'Azure Boards helped manage tasks, bugs, and user stories through Agile methodologies.' }
  ];


  nextArrow() {
    this.currentIndexSkills++;
    if (this.currentIndexSkills >= this.images.length) {
      this.currentIndexSkills = 0;
    }
  }

  previousArrow() {
    this.currentIndexSkills--;
    if (this.currentIndexSkills < 0) {
      this.currentIndexSkills = this.images.length - 1;
    }
  }

  nextArrow2() {
    this.currentIndexTools++;
    if (this.currentIndexTools >= this.imagesTools.length) {
      this.currentIndexTools = 0;
    }
  }

  previousArrow2() {
    this.currentIndexTools--;
    if (this.currentIndexTools < 0) {
      this.currentIndexTools = this.imagesTools.length - 1;
    }
  }
}
