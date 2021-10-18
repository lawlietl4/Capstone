import { Component, OnInit } from '@angular/core';
import { UserInfoModel } from '../../_models/UserInfoModel';

@Component({
  selector: 'app-ticketviewer',
  templateUrl: './ticketviewer.component.html',
  styleUrls: ['./ticketviewer.component.css']
})
export class TicketViewerComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  user: UserInfoModel = new UserInfoModel({guid: "D21ds12x",
    first_name: 'John',
    last_name: 'Doe',
    email: 'jdoe@student.neumont.edu',
    loaner: '12532'
  });
}
