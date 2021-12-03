import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loaning-tab',
  templateUrl: './loaning-tab.component.html',
  styleUrls: ['./loaning-tab.component.css']
})
export class LoaningTabComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!window.sessionStorage.getItem('authenticated')){
      window.alert('you are not logged in, please login');
      this.router.navigateByUrl('/login');
    }
    else {}
  }

}
