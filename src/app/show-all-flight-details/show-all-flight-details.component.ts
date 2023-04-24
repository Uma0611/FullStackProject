import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-flight-details',
  templateUrl: './show-all-flight-details.component.html',
  styleUrls: ['./show-all-flight-details.component.css']
})

export class ShowAllFlightDetailsComponent implements OnInit {
  flights: Flight[] = [];
  flightName: String = '';

  constructor(private serviceOfFlight: FlightService,
    private router: Router) {
  }

  searchByFlightName() {
    this.serviceOfFlight.findByName(this.flightName).subscribe(details => {
      this.flights = details;
      console.log(details);
    },
      error => {
        console.log(error);
      });
  }

  ngOnInit(): void {
    this.viewAllFlightDetails();
  }

  private viewAllFlightDetails() {
    this.serviceOfFlight.obtainAllFlightDetails().subscribe(details => {
      this.flights = details;
    });
  }

  viewFlightDetailsById(flightId: number) {
    this.router.navigate(['show-flight-details-by-id', flightId]);

  }

  changeFlightDetailsById(flightId: number) {
    this.router.navigate(['update-flight-details-by-id', flightId]);
  }

  deleteFlightDetailsById(flightId: number) {
    var status = confirm("Are you sure to delete this record?");
    if (status == true) {
      this.serviceOfFlight.removeFlightDetailsById(flightId).subscribe(details => {
        console.log(details);
        this.viewAllFlightDetails();
      })
    }
    else {
      this.viewAllFlightDetails();
    }
  }

  bookTickets(flightId: number) {
    this.router.navigate(['ticket-booking', flightId]);
  }

  deleteAllFlightDetails(): void {
    var status = confirm("Are you sure to delete all the records?");
    if (status == true) {
      this.serviceOfFlight.removeAllFlightDetails().subscribe(details => {
        console.log(details);
        this.viewAllFlightDetails();
      },
        error => {
          console.log(error);
        })
    }
    else {
      this.viewAllFlightDetails();
    }
  }

  getDomesticFlight() {
    this.serviceOfFlight.findByDomesticFlight().subscribe(details => {
      this.flights = details;
      console.log(details);
    },
      error => {
        console.log(error);
      });
  }

  getInternationalFlight() {
    this.serviceOfFlight.findByInternationalFlight().subscribe(details => {
      this.flights = details;
      console.log(details);
    },
      error => {
        console.log(error);
      });
  }

  backToviewAllFlightDetails() {
    this.viewAllFlightDetails();
  }
}
