import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_auth/auth.service';
import { GlobalConstants } from 'src/app/global-constants';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: false
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(): void {
    // console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value['username'], this.loginForm.value['password'])
      .subscribe(res => {
        // console.log(res);
        GlobalConstants.helper = `${res['helper']}`;
        window.sessionStorage.setItem('authenticated', `${res['authenticated']}`);
        this.router.navigateByUrl('/ticket-viewer');
      });
      // location.reload();
  }
}