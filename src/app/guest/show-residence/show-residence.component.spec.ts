import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowResidenceComponent } from './show-residence.component';

describe('ShowResidenceComponent', () => {
  let component: ShowResidenceComponent;
  let fixture: ComponentFixture<ShowResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowResidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
