import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResidenceListComponent } from './admin-residence-list.component';

describe('AdminResidenceListComponent', () => {
  let component: AdminResidenceListComponent;
  let fixture: ComponentFixture<AdminResidenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminResidenceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResidenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
