import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.css']
})
export class TicketInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  //   this.route.paramMap.subscribe( params=> {
  //     console.log(params.getAll("id"))
  // });
  }

}
