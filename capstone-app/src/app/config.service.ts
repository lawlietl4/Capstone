// Angular Modules 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn:'any' })
export class ConfigService {
  private readonly API_server = 'http://localhost:3000'; //API host endpoint

  constructor(private http: HttpClient) {  }//default constructor

  public getTickets() {
    return this.http.get(this.API_server + '/api/tickets');
  }
  public postTickets(options?: any) {
    return this.http.post(this.API_server + '/api/tickets/:id', options);
  }
  public putTickets(options?: any) {
    return this.http.put(this.API_server + '/api/tickets', options);
  }
  public deleteTickets() {
    return this.http.delete(this.API_server + '/api/tickets/:id');
  }
}
