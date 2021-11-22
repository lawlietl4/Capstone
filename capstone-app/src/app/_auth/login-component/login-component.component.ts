import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { 
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(): void {
    const value = this.loginForm.value;

    if(value.email && value.password) {
      this.authService.login(value.email, value.password)
      // .subscribe(() => {
      //   console.log("User logged in");
      //   this.router.navigateByUrl('/');
      // });
    }
  }

}
