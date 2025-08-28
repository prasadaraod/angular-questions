// import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  imports: [ReactiveFormsModule],
  templateUrl: './react-form.html',
  styleUrl: './react-form.css'
})
export class ReactForm implements OnInit {
  public userForm!: FormGroup;
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
      this.userForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        age: ['',[Validators.min(18), Validators.max(99)]]
      })
  }
  onSubmit():void{
    if(this.userForm.valid) {
      console.log('valid form', this.userForm.value);
    } else {
      console.log('invalid form', this.userForm);
    }
  }
}
