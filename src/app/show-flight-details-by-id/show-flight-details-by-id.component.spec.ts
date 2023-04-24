import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFlightDetailsByIdComponent } from './show-flight-details-by-id.component';

describe('ShowFlightDetailsByIdComponent', () => {
  let component: ShowFlightDetailsByIdComponent;
  let fixture: ComponentFixture<ShowFlightDetailsByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFlightDetailsByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFlightDetailsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
