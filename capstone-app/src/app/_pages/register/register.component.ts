import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
    });
  }

  onSubmit() {
    this.submitted = true;
    // console.log(this.userForm.value);
    if (this.userForm.invalid == true) {
      console.log('I am invalid');
      return;
    }
    else {
      this.authService.register(this.userForm.get('username')?.value, 
      (this.userForm.get('first_name')?.value + this.userForm.get('last_name')?.value), 
      this.userForm.get('password')?.value)
    }
  }
}