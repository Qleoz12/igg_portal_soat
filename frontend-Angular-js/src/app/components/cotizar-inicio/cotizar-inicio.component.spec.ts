import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizarInicioComponent } from './cotizar-inicio.component';

describe('CotizarInicioComponent', () => {
  let component: CotizarInicioComponent;
  let fixture: ComponentFixture<CotizarInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizarInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizarInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
