import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionConfirmarComponent } from './informacion-confirmar.component';

describe('InformacionConfirmarComponent', () => {
  let component: InformacionConfirmarComponent;
  let fixture: ComponentFixture<InformacionConfirmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionConfirmarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
