import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  seeMore: boolean = false;
  exp1: boolean = false;
  exp2: boolean = false;
  exp3: boolean = false;


  showExp1(){
    this.exp1 = true;
    this.exp2 = false;
    this.exp3 = false;
  }
  showExp2(){
    this.exp1 = false;
    this.exp2 = true;
    this.exp3 = false;
  }
  showExp3(){
    this.exp1 = false;
    this.exp2 = false;
    this.exp3 = true;
  }
  back(){
    this.exp1 = false;
    this.exp2 = false;
    this.exp3 = false;
  }
}
