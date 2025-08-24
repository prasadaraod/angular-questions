import { Component, OnInit } from '@angular/core';
import { Child } from "../child/child";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [Child,FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent implements OnInit {
  txtInput = '';
  dataFromParent = "hi from parent";
  ngOnInit(): void {
      console.log('parent component initialization');
  }
}
