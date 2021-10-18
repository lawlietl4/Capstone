import { Component, OnInit } from '@angular/core';
import { users } from '../../_models/users';

@Component({
  selector: 'app-ticketviewer',
  templateUrl: './ticketviewer.component.html',
  styleUrls: ['./ticketviewer.component.css']
})
export class TicketViewerComponent implements OnInit {
  users=users;

  constructor() { }
  ngOnInit(): void {
  }
}
