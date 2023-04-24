import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  nameOfUser = '';
  mailId = '';
  Message = '';

  constructor(
    private router: Router) {
  }

  contactSubmit() {
    if ((this.nameOfUser === '') || (this.mailId === '') || (this.Message === '')) {
      alert("Please fill all the fields");
    }
    else {
      this.router.navigate(['contact-submitted']);
    }
  }
}
