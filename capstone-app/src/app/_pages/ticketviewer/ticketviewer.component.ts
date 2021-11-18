import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ticketviewer',
  templateUrl: './ticketviewer.component.html',
  styleUrls: ['./ticketviewer.component.css']
})

export class TicketViewerComponent implements OnInit {
  tickets: any;

  constructor(service: ConfigService, private titleService: Title) {
    const tickets = service.getTickets();
    this.tickets = tickets;
  }

  ngOnInit(): void {
    this.titleService.setTitle('Ticket Viewer');
    return this.tickets;
  }
}
