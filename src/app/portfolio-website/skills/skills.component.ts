import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  currentIndex = 0;


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

 
  images = [
    { src: 'angular.png', title: 'Angular', description: 'Expert in Angular, a framework used to build dynamic and responsive web applications. ' },
    { src: 'js.png', title: 'Javascript', description: 'Skilled in JavaScript and TpeScript for adding interactivity to web applications.' },
    { src: 'html.png', title: 'HTML', description: 'Proficient in HTML for structuring and organizing web content. Adept at creating clean, semantic markup to ensure a solid foundation for web pages.' },
    { src: 'css.png', title: 'CSS', description: 'Experienced in CSS for designing and styling web pages.' },
    { src: 'git.png', title: 'Git', description: 'Proficient in Git for version control and collaboration.' }
  ];

  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the first image
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1; // Loop back to the last image
    }
  }
}
