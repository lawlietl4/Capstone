import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { Ticket } from 'src/app/ticket';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.css']
})
export class TicketInfoComponent implements OnInit {
  ticket: any;
  id: any;
  requester:any;

  constructor(
    private service: ConfigService, 
    private route: ActivatedRoute,
    private router: Router) {

    // this.ticket = ticket;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.ticket=(params.get('id'));
      this.id = (this.service.getTicketById(this.ticket));
      
      console.log(this.id);
      console.log(params);
    });
  }

}
