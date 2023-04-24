import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-update-flight-details-by-id',
  templateUrl: './update-flight-details-by-id.component.html',
  styleUrls: ['./update-flight-details-by-id.component.css']
})

export class UpdateFlightDetailsByIdComponent implements OnInit {
  flightId: number = 0;
  flight: Flight = new Flight();

  constructor(private serviceOfFlight: FlightService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.flightId = this.route.snapshot.params['flightId'];
    this.serviceOfFlight.obtainFlightDetailsById(this.flightId).subscribe(details => {
      this.flight = details;
    }, error => console.log(error));
  }

  onSubmit() {
    this.serviceOfFlight.modifyFlightDetailsById(this.flightId, this.flight).subscribe(details => {
      this.seeAllFlightDetails();
    }
      , error => console.log(error));
  }

  seeAllFlightDetails() {
    this.router.navigate(['/AirplaneDetails']);
  }
}
