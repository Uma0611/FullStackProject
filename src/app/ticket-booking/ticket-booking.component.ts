import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})

export class TicketBookingComponent implements OnInit {
  flightId: number = 0;
  flight: Flight = new Flight();
  calculatedPrice = '';

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
  if ((this.flight.numberOfSeats != 0) && (this.flight.calculatedPrice != 0)) {
      this.serviceOfFlight.updateDetailsBooked(this.flightId, this.flight)
        .subscribe(details => {
          console.log(details);
          this.router.navigate(['ticket-booked']);
        }
          , error => console.log(error));
    }
    else {
      alert("Please fill the fields");
    }
  }

  calculatedValues() {
    this.flight.seatingQuantity -= this.flight.numberOfSeats;
    this.flight.calculatedPrice = this.flight.numberOfSeats * (this.flight.price);
  }
}

