import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConfirmComponent } from './list-confirm.component';

describe('ListConfirmComponent', () => {
  let component: ListConfirmComponent;
  let fixture: ComponentFixture<ListConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
