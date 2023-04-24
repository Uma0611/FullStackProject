import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {
  userName = '';
  password = '';
  invalidLogin = false;
  emessage = '';

  constructor(private router: Router,
    private loginService: AuthenticationService) {
  }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginService.authenticate(this.userName, this.password)
    ) {
      this.router.navigate(['/AirplaneDetails']);
      console.log("navigate..");
      this.invalidLogin = false;
    }
    else
      this.invalidLogin = true;
    this.emessage = "Enter correct credentials";
  }
}