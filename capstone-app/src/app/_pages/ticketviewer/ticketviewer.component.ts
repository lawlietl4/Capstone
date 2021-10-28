import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-ticketviewer',
  templateUrl: './ticketviewer.component.html',
  styleUrls: ['./ticketviewer.component.css']
})

export class TicketViewerComponent implements OnInit {
  tickets = ConfigService;
  constructor() { }
  ngOnInit(): void { }
}
