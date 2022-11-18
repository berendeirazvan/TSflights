import { Injectable } from '@angular/core';
import { Flight } from './flight.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  //GET ALL
  getFlights(): Observable<any> {
    return this.http.get('http://localhost:3000/flights');
  }

  //GET FLIGHT BY ID
  getFlight(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/flights/${id}`);
  }

  postFlight(flight: Flight): Observable<any> {
    return this.http.post('http://localhost:3000/flights', flight);
  }

  deleteFlight(id: number) {

  }
}
