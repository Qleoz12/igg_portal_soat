import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoStepperComponent } from './info-stepper.component';

describe('InfoStepperComponent', () => {
  let component: InfoStepperComponent;
  let fixture: ComponentFixture<InfoStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
