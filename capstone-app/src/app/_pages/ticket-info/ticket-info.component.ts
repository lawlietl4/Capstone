import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-ticket-info',
    templateUrl: './ticket-info.component.html',
    styleUrls: ['./ticket-info.component.css'],
    standalone: false
})
export class TicketInfoComponent implements OnInit {
  id: any;
  ticket: any;
  name: any;
  requester: any;
  info: any;
  title: any;
  loaner: any;
  lastContacted: any;
  helper: any;
  email: any;

  constructor(
    private service: ConfigService,
    private route: ActivatedRoute,
    private titleService: Title) {

    // this.ticket = ticket;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = (params.get('id'));
      this.titleService.setTitle(`Ticket Info: ${params.get('id')}`);
      this.service.getTicketById(this.id).subscribe(res => {
        this.ticket = res;
        this.requester = this.ticket[0]['requester'];
        this.title = this.ticket[0]['title'];
        this.info = this.ticket[0]['description'];
        this.loaner = this.ticket[0]['loanerid'];
        this.lastContacted = this.ticket[0]['lastcontacted'];
        this.helper = this.ticket[0]['helper'];
        this.email = this.ticket[0]['email'];
      });
    });
  }
  emailUser(): void {
    
  }
}
