import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionrComponent } from './gestionr.component';

describe('GestionrComponent', () => {
  let component: GestionrComponent;
  let fixture: ComponentFixture<GestionrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
