import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logging {
  logError() {
    console.log('Error Logged');
  }
}
