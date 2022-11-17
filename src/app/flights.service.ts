import { Injectable } from '@angular/core';
import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  flights: Flight[] = [
         {origin: "Miami", destination: 'Chicago', flightNumber: 345,
         depart: '2020-02-25T23:18:21',
         arrive: '2020-02-25T23:21:21', nonstop: true}, 
         {origin: "New York", destination: 'Los Angeles', flightNumber: 432,
         depart: '2020-05-25T23:18:00',  
         arrive: '2020-05-25T23:23:21', nonstop: false}, 
         ];
  constructor() { }

  getFlights() {
    return this.flights;
  }

  postFlight(flight: Flight) {

  }

  deleteFlight(id: number) {

  }
}
