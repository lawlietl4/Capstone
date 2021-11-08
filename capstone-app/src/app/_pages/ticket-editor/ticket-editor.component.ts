import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-editor',
  templateUrl: './ticket-editor.component.html',
  styleUrls: ['./ticket-editor.component.css']
})
export class TicketEditorComponent implements OnInit {
  requester: string = '';
  description: string = '';
  loaner: number = 11111;

  submitted = false;
  registered = false;
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      loaner: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
      description: ['', Validators.required],
    });
  }

  invalidFirstName() {
    return (this.submitted && this.userForm.controls.first_name.invalid);
  }

  invalidLastName() {
    return (this.submitted && this.userForm.controls.last_name.invalid);
  }

  invalidEmail() {
    return (this.submitted && this.userForm.controls.email.invalid);
  }

  invalidLoaner() {
    return (this.submitted && this.userForm.controls.loaner.invalid);
  }

  emptyDescription() {
    return (this.submitted && this.userForm.controls.description.invalid);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.userForm.value);
    if (this.userForm.invalid == true) {
      return;
    }
    else {
      this.registered = true;
      this.requester = this.userForm.value.first_name + ' ' + this.userForm.value.last_name;
      this.description = this.userForm.value.description;
      console.log(this.requester);
    }
  }
}
