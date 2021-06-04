import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResidenceComponent } from './edit-residence.component';

describe('EditResidenceComponent', () => {
  let component: EditResidenceComponent;
  let fixture: ComponentFixture<EditResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditResidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
