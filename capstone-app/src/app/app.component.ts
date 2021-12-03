import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pages } from './pages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ticketing-server';
  pages = pages;
  loggedIn = false;
  helper = '';
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      // console.log(location.pathname);
      if (location.pathname == '/login') return;
      if (!window.sessionStorage.getItem('authenticated')) {
        this.loggedIn = false;
        // this.router.navigateByUrl('/login');
      } else if(window.sessionStorage.getItem('authenticated')) {
        this.helper = window.sessionStorage.getItem('helper') as string;
        this.loggedIn = true;
        // this.router.navigateByUrl('/ticket-viewer');
      }
    });

  }
  onclick(): void {
    window.sessionStorage.clear();
    location.reload();
  }
  onRegister(): void {
    this.router.navigateByUrl('/register');
  }
};

