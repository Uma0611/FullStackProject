import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-show-flight-details-by-id',
  templateUrl: './show-flight-details-by-id.component.html',
  styleUrls: ['./show-flight-details-by-id.component.css']
})

export class ShowFlightDetailsByIdComponent implements OnInit {
  flightId: number = 0;
  flight: any = [];

  constructor(private route: ActivatedRoute, private serviceOfFlight: FlightService) {
  }

  ngOnInit(): void {
    this.flightId = this.route.snapshot.params['flightId'];
    this.flight = new Flight();
    this.serviceOfFlight.obtainFlightDetailsById(this.flightId).subscribe(details => {
      this.flight = details;
    });
  }
}
