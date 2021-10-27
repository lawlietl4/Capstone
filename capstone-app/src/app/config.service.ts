import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Ticket } from './ticket';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = '_assets/config.json';
  tickets!: Observable<Ticket[]>;

  constructor(private http: HttpClient) { }
  getTickets() {
    this.tickets = this.http.get<Ticket[]>('/api/tickets');
    return this.tickets;
  }
  putTickets(input: string) {
    this.tickets = this.http.put<Ticket[]>(`/api/tickets/${ticket.id}`, input);
    return this.tickets;
  }
  postTickets(input: string){
    this.tickets = this.http.post<Ticket[]>('/api/tickets',input);
    return this.tickets;
  }
  deleteTickets(ticket: string){
    this.tickets = this.http.delete<Ticket[]>(`/api/tickets/${ticket}`);
    return this.tickets;
  }
}
