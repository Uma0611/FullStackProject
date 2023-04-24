import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-flight-details',
  templateUrl: './create-flight-details.component.html',
  styleUrls: ['./create-flight-details.component.css']
})

export class CreateFlightDetailsComponent implements OnInit {
  flight: Flight = new Flight();

  constructor(private serviceOfFlight: FlightService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  saveFlightDetails() {
    if ((this.flight.flightName != '') && (this.flight.initialPoint != '') && (this.flight.terminalPoint != '') && (this.flight.seatingQuantity != 0) && (this.flight.price != 0) && (this.flight.isInternationalFlight != null)) {
      this.serviceOfFlight.storeFlightDetails(this.flight).subscribe(details => {
        console.log(details);
        alert("The details has been saved");
        this.displayAllFlightDetails();
      },
        error => console.log(error));
    }
    else {
      alert("Please fill all the fields");
    }
  }

  displayAllFlightDetails() {
    this.router.navigate(['/AirplaneDetails']);
  }

  onSubmit() {
    console.log(this.flight);
    this.saveFlightDetails();
  }
}
