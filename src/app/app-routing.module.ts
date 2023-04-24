import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFlightDetailsComponent } from './create-flight-details/create-flight-details.component';
import { ShowAllFlightDetailsComponent } from './show-all-flight-details/show-all-flight-details.component';
import { ShowFlightDetailsByIdComponent } from './show-flight-details-by-id/show-flight-details-by-id.component';
import { UpdateFlightDetailsByIdComponent } from './update-flight-details-by-id/update-flight-details-by-id.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { LogOutComponent } from './log-out/log-out.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { CardComponent } from './card/card.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { FeedbackSubmittedComponent } from './feedback-submitted/feedback-submitted.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { ContactSubmittedComponent } from './contact-submitted/contact-submitted.component';
import { TicketBookedComponent } from './ticket-booked/ticket-booked.component';

const routes: Routes = [
  { path: 'create-flight-details', component: CreateFlightDetailsComponent, canActivate: [AuthGaurdService] },
  { path: 'AirplaneDetails', component: ShowAllFlightDetailsComponent, canActivate: [AuthGaurdService] },
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'show-flight-details-by-id/:flightId', component: ShowFlightDetailsByIdComponent, canActivate: [AuthGaurdService] },
  { path: 'update-flight-details-by-id/:flightId', component: UpdateFlightDetailsByIdComponent, canActivate: [AuthGaurdService] },
  { path: 'log-in', component: LogInComponent },
  { path: 'log-out', component: LogOutComponent, canActivate: [AuthGaurdService] },
  { path: 'home-page', component: HomePageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'feedback-form', component: FeedbackFormComponent },
  { path: 'card', component: CardComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'feedback-submitted', component: FeedbackSubmittedComponent },
  { path: 'ticket-booking/:flightId', component: TicketBookingComponent, canActivate: [AuthGaurdService] },
  { path: 'contact-submitted', component: ContactSubmittedComponent },
  { path: 'ticket-booked', component: TicketBookedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
