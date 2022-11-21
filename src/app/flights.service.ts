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

  //GET BY ID
  getFlight(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/flights/${id}`);
  }

  //POST
  postFlight(flight: Flight): Observable<any> {
    return this.http.post('http://localhost:3000/flights', flight);
  }

  //DELETE
  deleteFlight(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/flights/${id}/delete`);
  }

  //UPDATE
  updateFlight(id: number, flight: Flight): Observable<any> {
    return this.http.patch(`http://localhost:3000/flights/${id}/update`, flight);
  }

  //QUERY
  queryFlight(orig: string, dest: string): Observable<any> {
    return this.http.get(`http://localhost:3000/flights/query/${orig}/${dest}`);
  }
}
