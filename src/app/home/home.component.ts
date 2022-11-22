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
  selectedOrigin: string = '';
  selectedDestination: string = '';
  origin: string = '';
  destination: string = '';
  flightnumber: number = 0;
  depart: string = '';
  arrive: string = '';
  nonstop: boolean = false;
  filteredOriginList: any[] = [];
  filteredDestinationList: any[] = [];


 constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.flightsService.getAllOrigins().subscribe(data => {
      this.filteredOriginList = data;
    });

    this.flightsService.getAllDestinations().subscribe(data => {
      this.filteredDestinationList = data;
    });
  }

  //POST
  
  sendFlight(): void {
    const flight: Flight = {
      origin: this.origin,
      destination: this.destination,
      flightnumber: this.flightnumber,
      depart: this.depart,
      arrive: this.arrive,
      nonstop: this.nonstop

    }
    this.flightsService.postFlight(flight).subscribe();
  }

  query(): void {
    const origin = this.selectedOrigin;
    const destination = this.selectedDestination;

    this.flightsService.queryFlight(origin, destination).subscribe(data => {
      this.flights = data;
    });
  }
}
