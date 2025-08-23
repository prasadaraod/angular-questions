import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Menu } from "./menu/menu";
import { Login } from "./login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Menu, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-interview');
}
