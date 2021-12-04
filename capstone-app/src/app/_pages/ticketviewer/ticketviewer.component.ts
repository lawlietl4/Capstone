import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticketviewer',
  templateUrl: './ticketviewer.component.html',
  styleUrls: ['./ticketviewer.component.css']
})

export class TicketViewerComponent implements OnInit {
  tickets: any;

  constructor(service: ConfigService, private titleService: Title, private router: Router) {
    const tickets = service.getTickets();
    this.tickets = tickets;
  }

  ngOnInit(): void {
    if(!window.sessionStorage.getItem('authenticated')){
      this.router.navigateByUrl('/login');
      window.alert('You are not logged in, please sign in then try again');
    } else {
    this.titleService.setTitle('Ticket Viewer');
    return this.tickets;
    }
  }
}
