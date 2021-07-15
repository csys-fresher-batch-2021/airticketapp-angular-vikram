import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  /**
   * Get all flights.
   */
  getAllFlights(){
    let url = "http://localhost:3000/api/v1/flights";
    return this.http.get(url);
  }

  /**
   * Find the flight by id.
   * @param id 
   */
  findById(id:number){
    let url = "http://localhost:3000/api/v1/flights/" + id;
    return this.http.get(url);
  }

  /**
   * Add new flight.
   * @param flight 
   */
  addNewFlight(flight: any){
    let url = "http://localhost:3000/api/v1/flights";
    return this.http.post(url, flight);
  }

  /**
   * Function to update flight.
   * @param flightId 
   * @param updatedFlight 
   */
  updateFlight(flightId : any, updatedFlight : any){
    let url = "http://localhost:3000/api/v1/flights/" + flightId;
    return this.http.put(url, updatedFlight);
  }

  /**
   * Delete the flight from the schedule.
   * @param flightId 
   */
  deleteFlight(flightId: any){
    let url = "http://localhost:3000/api/v1/flights/" + flightId;
    return this.http.delete(url);
  }
}
