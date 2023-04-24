import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  NameOfUser = '';
  email = '';
  passWord = '';
  mobileNumber = '';

  constructor(private router: Router) {
  }

  successRegister() {
    if ((this.NameOfUser === '') || (this.email === '') || (this.passWord === '') || (this.mobileNumber === '')) {
      alert("Please fill all the fields");
    }
    else {
      alert("Registered Successfully....Login to continue");
      this.router.navigate(['log-in']);
    }
  }
}

