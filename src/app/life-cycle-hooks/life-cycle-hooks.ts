import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  imports: [],
  templateUrl: './life-cycle-hooks.html',
  styleUrl: './life-cycle-hooks.css'
})
export class LifeCycleHooks implements OnInit {

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
      console.log('ngOnInit');
  }

  ngOnDestroy() {
    console.log('on destory');
  }
}
