import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilConsumerComponent } from './profil-consumer.component';

describe('ProfilConsumerComponent', () => {
  let component: ProfilConsumerComponent;
  let fixture: ComponentFixture<ProfilConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilConsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
