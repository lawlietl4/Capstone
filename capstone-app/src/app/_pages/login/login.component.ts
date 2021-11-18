import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../_auth/authorization.service';
import { TokenStoreService } from 'src/app/_auth/token-store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from 'src/app/global-constants';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit{
  constructor(private token: TokenStoreService, private auth: AuthorizationService, private formBuilder: FormBuilder, private titleService: Title){ }
  userForm!: FormGroup
  loginSucceeded: boolean = false;
  helper: string = GlobalConstants.helper;
  AUTH_API: string = 'http://localhost:3000/api/auth';

  ngOnInit(): void {
    this.titleService.setTitle('Login');
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
    });
  }

  onSubmit(): void {
    if (this.loginSucceeded){
      this.helper = JSON.stringify(fetch(this.AUTH_API));
    } else {

    }
  }
}