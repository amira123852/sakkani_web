import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilAdminComponent } from './edit-profil-admin.component';

describe('EditProfilAdminComponent', () => {
  let component: EditProfilAdminComponent;
  let fixture: ComponentFixture<EditProfilAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfilAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
