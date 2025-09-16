import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student-service';
// import { NgFor } from "@angular/common";

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[StudentService]
})
export class Students implements OnInit {

  students: any[] = [];
  public errorMessage: any;
  constructor(private studentService: StudentService){}
  ngOnInit(): void {
    console.log('inside students ngoninit');
      this.studentService.getStudents()
      // .subscribe(
      //   (data) => {
      //     this.students = data;
      //     this.cdf.detectChanges();
      //     // console.log('received data', data);
      //     console.log(this.students);
      //   }
      // )
      .subscribe({
        next: data => {
          this.students = data;
          // this.cdf.detectChanges();
        },
        error: errorReceived =>{
          this.errorMessage = errorReceived.message;
          // this.cdf.detectChanges();
        } 
      }
      )
  }
}
