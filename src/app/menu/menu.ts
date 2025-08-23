import { Component, OnInit } from '@angular/core';
import { Logging } from '../services/logging';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  providers: [Logging]
})
export class Menu implements OnInit {
  constructor(private logService: Logging){
    console.log('Menu constructor');
    logService.logError();
  }
  ngOnInit(): void {
      console.log('Menu ng on in it');
  }
}
