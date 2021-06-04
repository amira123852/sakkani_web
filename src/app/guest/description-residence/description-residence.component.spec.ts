import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionResidenceComponent } from './description-residence.component';

describe('DescriptionResidenceComponent', () => {
  let component: DescriptionResidenceComponent;
  let fixture: ComponentFixture<DescriptionResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionResidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
