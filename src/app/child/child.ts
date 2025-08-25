import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Input() msgFromParent: string | undefined;
  ngOnChanges(changes: SimpleChanges) {
    for(const propName in changes) {
      if(changes.hasOwnProperty(propName)) {
        const change = changes[propName];
        console.log('change', change);
        console.log('previous value', change.previousValue );
        console.log('current value', change.currentValue);
        console.log('first change', change.firstChange);
      }
    }
  }
}
