import { Component, OnInit } from '@angular/core';
import { Logging } from '../services/logging';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
  providers:[Logging]
})
export class Login implements OnInit{
  constructor(private loggedService: Logging){
    console.log('login constructor');
    loggedService.logError();
  }
  ngOnInit(): void {
      console.log('login on in it');
  }
}
