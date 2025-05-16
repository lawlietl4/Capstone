import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/global-constants';

@Component({
    selector: 'app-ticket-editor',
    templateUrl: './ticket-editor.component.html',
    styleUrls: ['./ticket-editor.component.css'],
    standalone: false
})
export class TicketEditorComponent implements OnInit {
  requester: string = '';
  description: string = '';
  loaner: number = 11111;
  email: string = '';
  title: string = '';
  submitted = false;
  registered = false;
  ticketForm!: FormGroup;
  helper: string|null = GlobalConstants.helper;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    if (!window.sessionStorage.getItem('authenticated')) {
      window.alert('you are not logged in, please login');
      this.router.navigateByUrl('/login');
    }
    else {
      this.ticketForm = this.formBuilder.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        loaner: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
        // helper: [this.helper, [Validators.required]],
        description: ['', Validators.required],
        title: ['', Validators.required]
      });
    }
  }

  invalidFirstName() {
    return (this.submitted && this.ticketForm.controls.first_name.invalid);
  }

  invalidLastName() {
    return (this.submitted && this.ticketForm.controls.last_name.invalid);
  }

  invalidEmail() {
    return (this.submitted && this.ticketForm.controls.email.invalid);
  }

  invalidLoaner() {
    return (this.submitted && this.ticketForm.controls.loaner.invalid);
  }

  emptyDescription() {
    return (this.submitted && this.ticketForm.controls.description.invalid);
  }

  invalidTitle() {
    return (this.submitted && this.ticketForm.controls.title.invalid);
  }

  invalidHelper() {
    return (this.submitted && this.ticketForm.controls.helper.invalid);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.ticketForm.value);
    if (this.ticketForm.invalid == true) {
      return;
    }
    else {
      this.registered = true;
      this.requester = this.ticketForm.value['first_name'] + ' ' + this.ticketForm.value['last_name'];
      this.email = this.ticketForm.value['email'];
      this.loaner = this.ticketForm.value['loaner'];
      this.description = this.ticketForm.value['description'];
      this.title = this.ticketForm.value['title'];
      this.helper = window.sessionStorage.value['helper'];
      fetch('http://localhost:3000/api/tickets',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
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
