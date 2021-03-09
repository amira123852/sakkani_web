import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncComponent } from './gestionc.component';

describe('GestioncComponent', () => {
  let component: GestioncComponent;
  let fixture: ComponentFixture<GestioncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
