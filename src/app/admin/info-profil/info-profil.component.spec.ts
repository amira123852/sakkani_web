import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProfilComponent } from './info-profil.component';

describe('InfoProfilComponent', () => {
  let component: InfoProfilComponent;
  let fixture: ComponentFixture<InfoProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
