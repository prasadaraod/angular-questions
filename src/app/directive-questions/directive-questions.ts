import { Component } from '@angular/core';
import { NgStyle , NgClass} from "@angular/common";
// import { NgFor, NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault } from '@angular/common';
@Component({
  selector: 'app-directive-questions',
  imports: [NgStyle, NgClass],
  templateUrl: './directive-questions.html',
  styleUrl: './directive-questions.css'
})
export class DirectiveQuestions {
  students = ['Akhila', 'Manoj'];
  subjects = [ 'Telugu', 'English','Hindi', 'Science'];
  bgColor = '';
  cssClassName = 'redWhiteClass';
  

  changeBgColor(colorName:string) {
    this.bgColor = colorName;
    if(colorName === 'red') {
      this.cssClassName = 'redWhiteClass';
    } else {
      this.cssClassName = 'blueWhiteClass';
    }
  }
}
