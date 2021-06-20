import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProviderComponent } from './info-provider.component';

describe('InfoProviderComponent', () => {
  let component: InfoProviderComponent;
  let fixture: ComponentFixture<InfoProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
