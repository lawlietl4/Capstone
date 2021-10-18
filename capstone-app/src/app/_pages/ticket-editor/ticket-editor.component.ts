import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-editor',
  templateUrl: './ticket-editor.component.html',
  styleUrls: ['./ticket-editor.component.css']
})
export class TicketEditorComponent implements OnInit {
  submitted = false;
  registered = false;
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      loaner: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]]
    });
  }

  invalidFirstName() {
    return (this.submitted && this.userForm.controls.first_name.errors != null);
  }

  invalidLastName() {
    return (this.submitted && this.userForm.controls.last_name.errors != null);
  }

  invalidEmail() {
    return (this.submitted && this.userForm.controls.email.errors != null);
  }

  invalidLoaner() {
    return (this.submitted && this.userForm.controls.loaner.errors != null);
  }
  
  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid == true) {
      return;
    }
    else {
      this.registered = true;
    }
  }
}
