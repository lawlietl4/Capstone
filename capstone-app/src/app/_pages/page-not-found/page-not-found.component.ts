import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.css'],
    standalone: false
})
export class PageNotFoundComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit(): void {
  }

}
