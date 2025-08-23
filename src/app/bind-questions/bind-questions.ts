import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bind-questions',
  imports: [FormsModule],
  templateUrl: './bind-questions.html',
  styleUrl: './bind-questions.css'
})
export class BindQuestions {
  strData = "string data from typescript";
  title = "Property binding  test";
  isUsernameDisabled = true;
  txtName = '';
  greet() {
    alert('Hi User');
  }
  add(a: number, b:number) {
    let sum = a + b;
    console.log('Sum is ', sum);
  }
}
