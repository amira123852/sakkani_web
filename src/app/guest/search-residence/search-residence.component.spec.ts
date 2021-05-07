import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResidenceComponent } from './search-residence.component';

describe('SearchResidenceComponent', () => {
  let component: SearchResidenceComponent;
  let fixture: ComponentFixture<SearchResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
