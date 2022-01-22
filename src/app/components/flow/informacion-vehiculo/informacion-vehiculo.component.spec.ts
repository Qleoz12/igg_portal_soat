import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionVehiculoComponent } from './informacion-vehiculo.component';

describe('InformacionVehiculoComponent', () => {
  let component: InformacionVehiculoComponent;
  let fixture: ComponentFixture<InformacionVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
