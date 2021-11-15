import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-ticketviewer',
  templateUrl: './ticketviewer.component.html',
  styleUrls: ['./ticketviewer.component.css']
})

export class TicketViewerComponent implements OnInit {
  tickets: any;

  constructor(service: ConfigService) {
    const tickets = service.getTickets();
    this.tickets = tickets;
  }

  ngOnInit(): void {
    return this.tickets;
  }
}
