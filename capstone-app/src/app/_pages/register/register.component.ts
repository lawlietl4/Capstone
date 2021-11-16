import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/_auth/authorization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };

  isSuccessful = false;
  signupFailed = false;
  errorMsg = '';

  constructor(private authService: AuthorizationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.register(username, password).subscribe(
      data => {
        // console.log(data);
        this.isSuccessful = true;
        this.signupFailed = false;
      },
      err => {
        this.errorMsg = err.error.message;
        this.signupFailed = true;
      }
    );
  }
}
