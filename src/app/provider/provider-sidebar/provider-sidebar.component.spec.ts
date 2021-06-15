import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSidebarComponent } from './provider-sidebar.component';

describe('ProviderSidebarComponent', () => {
  let component: ProviderSidebarComponent;
  let fixture: ComponentFixture<ProviderSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
