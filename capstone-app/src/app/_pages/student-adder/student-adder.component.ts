import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-student-adder',
    templateUrl: './student-adder.component.html',
    styleUrls: ['./student-adder.component.css'],
    standalone: false
})
export class StudentAdderComponent implements OnInit {
  submitted = false;
  registered = false;
  userForm!: FormGroup;
  serialNo: string = '';
  email: string = '';
  name: string = '';
  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    if (!window.sessionStorage.getItem('authenticated')){
      window.alert('you are not logged in, please login');
      this.router.navigateByUrl('/login');
    }
    else {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      serial: ['', [Validators.required, Validators.pattern('[rR]{1}[9][0|1][a-zA-Z0-9]{5}')]],
    });
  }
  }

  invalidFirstName() {
    return (this.submitted && this.userForm.controls.first_name.invalid);
  }

  invalidLastName() {
    return (this.submitted && this.userForm.controls.last_name.invalid);
  }

  invalidEmail() {
    return (this.submitted && (this.userForm.controls.email.invalid));
  }

  invalidSerial() {
    return (this.submitted && this.userForm.controls.serial.invalid);
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid == true) {
      return;
    }
    else {
      this.registered = true;
      this.name = this.userForm.value['first_name'] + ' ' + this.userForm.value['last_name'];
      this.email = this.userForm.value['email'];
      this.serialNo = this.userForm.value['serial'];
      // console.log(this.name,this.email,this.serialNo);
      fetch('http://localhost:3000/api/users',
      {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            'name': this.name,
            'email': this.email,
            "serialNo": this.serialNo
          })
      });
    }
  }
}
