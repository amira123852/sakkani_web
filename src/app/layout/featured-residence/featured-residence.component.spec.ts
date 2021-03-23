import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedResidenceComponent } from './featured-residence.component';

describe('FeaturedResidenceComponent', () => {
  let component: FeaturedResidenceComponent;
  let fixture: ComponentFixture<FeaturedResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedResidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
