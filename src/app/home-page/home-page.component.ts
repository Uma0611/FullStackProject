import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {
  constructor(
    private router: Router) {
  }

  goToLogin() {
    this.router.navigate(['/log-in']);
  }

  goToExplore() {
    this.router.navigate(['/card']);
  }
}
