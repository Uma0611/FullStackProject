import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllFlightDetailsComponent } from './show-all-flight-details.component';

describe('ShowAllFlightDetailsComponent', () => {
  let component: ShowAllFlightDetailsComponent;
  let fixture: ComponentFixture<ShowAllFlightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllFlightDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllFlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
