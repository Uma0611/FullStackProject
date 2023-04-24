import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})

export class LogOutComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService,
    private router: Router) {
  }

  ngOnInit() {
    var status = confirm("Are you sure to logOut?");
    if (status == true) {
      this.authenticationService.logOut();
      this.router.navigate(['feedback-form']);
    }
    else {
      this.router.navigate(['AirplaneDetails']);
    }
  }
}
