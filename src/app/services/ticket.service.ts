import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  /**
   *Get all tickets.
   */
  getAllTicket(){
    let url = "http://localhost:3000/api/v1/tickets/";
    return this.http.get(url);
  }
}
