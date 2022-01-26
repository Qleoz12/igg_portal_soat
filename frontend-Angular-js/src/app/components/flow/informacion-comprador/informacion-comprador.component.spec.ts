import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionCompradorComponent } from './informacion-comprador.component';

describe('InformacionCompradorComponent', () => {
  let component: InformacionCompradorComponent;
  let fixture: ComponentFixture<InformacionCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionCompradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
