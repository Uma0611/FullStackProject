import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-submitted',
  templateUrl: './feedback-submitted.component.html',
  styleUrls: ['./feedback-submitted.component.css']
})

export class FeedbackSubmittedComponent {
  constructor(private router: Router) {
  }

  goToLoginPage() {
    this.router.navigate(['log-in']);
  }
}
