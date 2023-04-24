import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ticket-booked',
  templateUrl: './ticket-booked.component.html',
  styleUrls: ['./ticket-booked.component.css']
})

export class TicketBookedComponent {
  constructor(private router: Router) {
  }

  goToAirplaneDetailsPage() {
    this.router.navigate(['/AirplaneDetails']);
  }
}
