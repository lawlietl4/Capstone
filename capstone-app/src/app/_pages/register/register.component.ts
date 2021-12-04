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

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    // console.log(this.userForm.value);
    if (this.userForm.invalid == true) {
      console.log('I am invalid');
      return;
    } else {
      this.authService.register(this.userForm.value['username'], (this.userForm.value['first_name'] + ' ' + this.userForm.value['last_name']), this.userForm.value['password'])
        .subscribe(res => {
          console.log(res);
        });
      window.alert('user created, you are now being redirected to login');
      this.router.navigateByUrl('/login');
    }
  }
}