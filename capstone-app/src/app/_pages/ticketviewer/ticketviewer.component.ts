import { Component, OnInit } from '@angular/core';
import { users } from '../../_models/users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticketviewer',
  templateUrl: './ticketviewer.component.html',
  styleUrls: ['./ticketviewer.component.css']
})
export class TicketViewerComponent implements OnInit {
  tickets=users;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params=> console.log(params));
   }
  ngOnInit(): void {
  }
}
