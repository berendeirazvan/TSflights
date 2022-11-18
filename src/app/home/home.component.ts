import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights: Flight[] = [];
  flightByID: Flight[] = []

 constructor(private flightsService: FlightsService) { }

  flight: Flight = { id: 50, origin: 'constanta', destination: 'mangalia', flightnumber: 7539, depart: '2022-05-23 05:23:12', arrive: '2022-05-23 06:00:00', nonstop: false}
  ngOnInit(): void {
    this.flightsService.getFlights().subscribe(data => {
      this.flights = data;
    })
  }

  //POST
  
  onClick(): void {
    this.flightsService.postFlight(this.flight).subscribe();
    window.location.reload();
  }

  onClickGetByID(): void {
    this.flightsService.getFlight(5).subscribe(data => {
      this.flightByID = data;
    });
    
  }
}
