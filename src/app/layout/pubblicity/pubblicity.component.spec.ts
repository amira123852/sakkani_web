import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubblicityComponent } from './pubblicity.component';

describe('PubblicityComponent', () => {
  let component: PubblicityComponent;
  let fixture: ComponentFixture<PubblicityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubblicityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubblicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
