import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AirlineReservationAngularProject';
  constructor(public loginService: AuthenticationService) { }
  ngOnInit() {
  }
}
