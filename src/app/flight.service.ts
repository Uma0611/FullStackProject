import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private baseURL = "http://localhost:8080/AirlineReservation/AirplaneDetails";
  constructor(private httpClient: HttpClient) { }

  storeFlightDetails(flight: Flight): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, flight);
  }
  obtainAllFlightDetails(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(`${this.baseURL}`);
  }
  obtainFlightDetailsById(flightId: number): Observable<Flight> {
    return this.httpClient.get<Flight>(`${this.baseURL}/${flightId}`);
  }
  modifyFlightDetailsById(flightId: number, flight: Flight): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${flightId}`, flight);
  }
  removeFlightDetailsById(flightId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${flightId}`);
  }
  updateDetailsBooked(flightId: number, flight: Flight): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${flightId}`, flight);
  }
  removeAllFlightDetails(): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}`);
  }
  findByName(name: any): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(`${this.baseURL}?name=${name}`);
  }
  findByInternationalFlight(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(`${this.baseURL}/InternationalAirplane`);
  }
  findByDomesticFlight(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(`${this.baseURL}/DomesticAirplane`);
  }
}
