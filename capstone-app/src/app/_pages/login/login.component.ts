import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/_auth/authorization.service';
import { User } from 'src/app/_auth/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthorizationService, private router: Router) { }

  ngOnInit(): void {
  }

  register(form: any) {
    console.log(form.value);
    this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('ticket-viewer');
    });
  }

  login(form: any) {
    console.log(form.value);
    this.authService.signIn(form.value).subscribe((res) => {
      console.log("signed in!");
      this.router.navigateByUrl('ticket-viewer');
    });
  }
}
