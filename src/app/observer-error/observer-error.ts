import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observer, Observable } from 'rxjs';

@Component({
  selector: 'app-observer-error',
  imports: [],
  templateUrl: './observer-error.html',
  styleUrl: './observer-error.css'
})
export class ObserverError implements OnInit {
  data:any[] = [];
  // observable example 
  // in first step declared observable with all the data sending once
  // in second step instead of sending all data at once sending one after another
  // in third step each data with time duration
  myObservable = new Observable((observable) => {

      setTimeout(()=> {observable.next(1)}, 1000);
      setTimeout(()=> {observable.next(2)}, 2000);
      setTimeout(()=> {observable.next(3)}, 3000);
      setTimeout(()=> {observable.error(new Error('Something went wrong please try again later'))}, 3000);
      setTimeout(()=> {observable.next(4)}, 4000);
      setTimeout(()=> {observable.next(5)}, 5000);
    });
  constructor(private cdf: ChangeDetectorRef) {
  }
  ngOnInit(): void {
  }

  // in this function
  // first reading all the data at once and assign to data array
  // in second step reading data one by one
  // in second step observed that view is not changing
  // find the problem that when we are pushing the data  change is not detecting
  // so we used change detection strategy , change detect ref from core
  // change detect ref intialised in constructor
  // when we push new data to data array then calling detect changes
  // now working 
  getAsyncData() {

    this.myObservable.subscribe((val: any)=> {
      this.data.push(val);
      this.cdf.detectChanges();
      console.log('val', val);
    },
  (err)=> {
    alert(err.message);
  },()=> {
    alert('All the data is streamed');
  });
  }
}
