import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerFilterComponent } from './consumer-filter.component';

describe('ConsumerFilterComponent', () => {
  let component: ConsumerFilterComponent;
  let fixture: ComponentFixture<ConsumerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
