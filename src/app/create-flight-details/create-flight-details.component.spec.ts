import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFlightDetailsComponent } from './create-flight-details.component';

describe('CreateFlightDetailsComponent', () => {
  let component: CreateFlightDetailsComponent;
  let fixture: ComponentFixture<CreateFlightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFlightDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
