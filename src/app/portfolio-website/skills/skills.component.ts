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
    { src: 'angular.png', title: 'CLI', description: 'Expert in Angular, a framework used to build dynamic and responsive web applications.' },
    { src: 'typeS.jpg', title: 'Typescript', description: 'Used while creating components, services, and directives with strong typing to ensure code reliability and maintainability. ' },
    { src: 'js.png', title: 'Javascript', description: 'Skilled in JavaScript and TpeScript for adding interactivity to web applications.' },
    { src: 'html.png', title: 'HTML', description: 'Proficient in HTML for structuring and organizing web content.' },
    { src: 'css.png', title: 'CSS', description: 'Experienced in CSS for designing and styling web pages.' },
    { src: 'rxjs.png', title: 'RxJS', description: 'Used in Angular for managing asynchronous data streams and events.' }
  ];
  imagesTools = [
    { src: 'nodeJs.png', title: 'Node.js', description: 'Used to run the Angular CLI and other development tools. Used npm to manage Angular’s dependencies and 3rd-party libraries.' },
    { src: 'postman.png', title: 'Postman', description: 'Used for testing API endpoints that are consumed by Angular services.' },
    { src: 'netlify.png', title: 'Netlify', description: 'Used for deployment of Angular apps.' },
    { src: 'bitbucket.png', title: 'BitBucket', description: 'Git repository hosting service that allows to manage Angular project. Used to track changes, collaborate with team members.' },
    { src: 'jira.png', title: 'Jira', description: 'Used for Agile methodologies (Scrum), allowing to manage sprints, backlogs, and track progress using boards and charts.' },
    { src: 'git.png', title: 'Git', description: 'Proficient in Git for version control and collaboration.' },
    { src: 'azureDevops.png', title: 'Azure Devops', description: 'Azure Boards helped manage tasks, bugs, and user stories through Agile methodologies.' }
  ];


  nextArrow() {
    if (this.currentIndexSkills < this.images.length - 1) {
      this.currentIndexSkills++;
    } else {
      this.currentIndexSkills = 0;
    }
  }

  previousArrow() {
    if (this.currentIndexSkills > 0) {
      this.currentIndexSkills--;
    } else {
      this.currentIndexSkills = this.images.length - 1;
    }
  }

  nextArrow2() {
    if (this.currentIndexTools < this.imagesTools.length - 1) {
      this.currentIndexTools++;
    } else {
      this.currentIndexTools = 0;
    }
  }

  previousArrow2() {
    if (this.currentIndexTools > 0) {
      this.currentIndexTools--;
    } else {
      this.currentIndexTools = this.imagesTools.length - 1;
    }
  }
}
