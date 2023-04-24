import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-submitted',
  templateUrl: './contact-submitted.component.html',
  styleUrls: ['./contact-submitted.component.css']
})

export class ContactSubmittedComponent {
  constructor(private router: Router) {
  }

  goToHomePage() {
    this.router.navigate(['home-page']);
  }
}
