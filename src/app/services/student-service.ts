import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

interface IStudent {
  id: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _studentsApiUrl = "data/students.json";

  constructor(private http: HttpClient){}
  
  getStudents():Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this._studentsApiUrl).pipe(
      catchError((error) => {
        return throwError(()=> error);
      })
    )
  }
}
