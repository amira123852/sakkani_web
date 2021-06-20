import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionUserComponent } from './description-user.component';

describe('DescriptionUserComponent', () => {
  let component: DescriptionUserComponent;
  let fixture: ComponentFixture<DescriptionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
