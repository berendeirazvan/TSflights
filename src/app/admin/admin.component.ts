import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private flightsService: FlightsService) { }

  flightList: Flight[] = [];

  ngOnInit(): void {
    this.flightsService.getFlights().subscribe(data => {
      this.flightList = data;
    });
  }
  
  delete(flight: Flight): void {
    if(window.confirm("Are you sure you want to delete the entry?")) {
      this.flightsService.deleteFlight(Number(flight.id)).subscribe();
      window.location.reload();
    }
  }
    

  update(flight: Flight) {
    this.flightsService.updateFlight(Number(flight.id), flight).subscribe();
    window.location.reload();
  }
}
