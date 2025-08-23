import { Component } from '@angular/core';
import { LowerCasePipe, UpperCasePipe, CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [ LowerCasePipe, UpperCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
  title = "Pipes Usage testing";
  dob = "06/20/1985";
}
