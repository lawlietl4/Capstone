import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { TicketViewerComponent } from '../ticketviewer/ticketviewer.component';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})

export class MainWindowComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {
  }

}
