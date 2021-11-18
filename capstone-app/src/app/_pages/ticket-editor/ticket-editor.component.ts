import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalConstants } from 'src/app/global-constants';

@Component({
  selector: 'app-ticket-editor',
  templateUrl: './ticket-editor.component.html',
  styleUrls: ['./ticket-editor.component.css']
})
export class TicketEditorComponent implements OnInit {
  requester: string = '';
  description: string = '';
  loaner: number = 11111;
  email: string = '';
  title: string = '';
  submitted = false;
  registered = false;
  userForm!: FormGroup;
  helper: string = GlobalConstants.helper;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      loaner: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
      helper: [this.helper, [Validators.required]],
      description: ['', Validators.required],
      title: ['', Validators.required]
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

  invalidTitle(){
    return (this.submitted && this.userForm.controls.title.invalid);
  }

  invalidHelper(){
    return (this.submitted && this.userForm.controls.helper.invalid);
  }

  onSubmit() {
    this.submitted = true;
    // console.log(this.userForm.value);
    if (this.userForm.invalid == true) {
      return;
    }
    else {
      this.registered = true;
      this.requester = this.userForm.value['first_name'] + ' ' + this.userForm.value['last_name'];
      this.email = this.userForm.value['email'];
      this.loaner = this.userForm.value['loaner'];
      this.description = this.userForm.value['description'];
      this.title = this.userForm.value['title'];
      this.helper = this.userForm.value['helper'];
      fetch('http://localhost:3000/api/tickets', 
      { 
        method: 'POST', 
        headers:{'Content-Type': 'application/json'}, 
        body: JSON.stringify({
          'requester': this.requester,
          'email': this.email,
          'loanerid': this.loaner,
          'description': this.description,
          'title': this.title,
          'closed': 0,
          'helper': this.helper
        })
      });
    }
  }
}
