import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLandpageComponent } from './main-landpage.component';

describe('MainLandpageComponent', () => {
  let component: MainLandpageComponent;
  let fixture: ComponentFixture<MainLandpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLandpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
