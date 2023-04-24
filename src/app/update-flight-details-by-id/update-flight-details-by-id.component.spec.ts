import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlightDetailsByIdComponent } from './update-flight-details-by-id.component';

describe('UpdateFlightDetailsByIdComponent', () => {
  let component: UpdateFlightDetailsByIdComponent;
  let fixture: ComponentFixture<UpdateFlightDetailsByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFlightDetailsByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFlightDetailsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
