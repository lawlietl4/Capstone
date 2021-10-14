import { Component } from '@angular/core';
import { pages } from './pages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capstone-app';
  pages = pages;
  click(){
    window.alert("You clicked me!");
  }
};
