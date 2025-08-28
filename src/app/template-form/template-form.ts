import { Component, OnInit, } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css'
})
export class TemplateForm implements OnInit {
  user: User = {
    name: '',
    email: ''
  };
   model = {
    name: '',
    alterEgo: '',
  };
  constructor(){}
  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if(form.valid){
      console.log('valid form', form);
      console.log(this.user);
      form.resetForm();
    } else {
      console.log('invalid form ', form);
      console.log(this.user);
    }
  }
  onLoginSubmit(form: NgForm) {
    if(form.valid){
      console.log('valid form', form);
    } else {
      console.log('invalid form ', form);
    }
  }
  onHeroSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted successfully!', this.model);
      // Perform actions with the form data
    } else {
      console.log('Form is invalid. Please correct the errors.');
    }
  }

  onAnotherSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted successfully!', form.value);
      // Process form data here
    } else {
      console.log('Form is invalid. Please correct the errors.');
    }
  }
}
