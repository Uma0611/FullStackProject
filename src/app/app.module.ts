import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFlightDetailsComponent } from './create-flight-details/create-flight-details.component';
import { UpdateFlightDetailsByIdComponent } from './update-flight-details-by-id/update-flight-details-by-id.component';
import { ShowFlightDetailsByIdComponent } from './show-flight-details-by-id/show-flight-details-by-id.component';
import { ShowAllFlightDetailsComponent } from './show-all-flight-details/show-all-flight-details.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CardComponent } from './card/card.component';
import { RegisterComponent } from './register/register.component';
import { FeedbackSubmittedComponent } from './feedback-submitted/feedback-submitted.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { ContactSubmittedComponent } from './contact-submitted/contact-submitted.component';
import { TicketBookedComponent } from './ticket-booked/ticket-booked.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFlightDetailsComponent,
    UpdateFlightDetailsByIdComponent,
    ShowFlightDetailsByIdComponent,
    ShowAllFlightDetailsComponent,
    LogInComponent,
    LogOutComponent,
    HomePageComponent,
    ContactComponent,
    FeedbackFormComponent,
    AboutUsComponent,
    CardComponent,
    RegisterComponent,
    FeedbackSubmittedComponent,
    TicketBookingComponent,
    ContactSubmittedComponent,
    TicketBookedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
