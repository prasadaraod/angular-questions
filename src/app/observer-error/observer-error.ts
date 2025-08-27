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

  getAsyncData() {
    this.myObservable.subscribe({
        next:(val: any) => {
          console.log('val ', val);
          this.data.push(val);
          this.cdf.detectChanges();
        }, error(err) {
          console.log('error', err.message );
          alert(err.message);
        },
        complete() {
          console.log('All streaming completed');
          alert('All the data is streamed');
        }
      })
    // this.myObservable.subscribe((val: any)=> {
    //   this.data.push(val);
    //   this.cdf.detectChanges();
    //   console.log('val', val);
    // },
    // (err)=> {
    //   alert(err.message);
    // },()=> {
    //   alert('All the data is streamed');
    // });
  }
}
