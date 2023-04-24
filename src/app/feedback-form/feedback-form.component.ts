import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})

export class FeedbackFormComponent {
  feedback = '';

  constructor(private router: Router) {
  }

  feedbackSubmit() {
    if ((this.feedback === '')) {
      alert("Please fill the feedback field");
    }
    else {
      this.router.navigate(['feedback-submitted']);
    }
  }
}
