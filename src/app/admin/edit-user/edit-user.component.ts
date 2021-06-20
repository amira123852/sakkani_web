import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Subject {
  name: string;
}
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList;
  @ViewChild('resetStudentForm') myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  editForm: FormGroup;
  subjectArray: Subject[] = [];
  SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];

  ngOnInit() {
    this.updateMaisonForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private userService: UserService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe((data) => {
      console.log("By ID",data.payload.password);
      this.subjectArray = data.payload;
      this.editForm = this.fb.group({
        nom: [data.payload.nom, [Validators.required]],
        email: [data.payload.email, [Validators.required]],
        password: [data.payload.password, [Validators.required]],
        telephone: [data.payload.telephone, [Validators.required]],
        ville: [data.payload.ville, [Validators.required]],
        datenaissance: [data.payload.datenaissance, [Validators.required]],
      });
    });
  }

  /* Reactive book form */
  updateMaisonForm() {
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      telephone: [this.subjectArray],
      ville: ['', [Validators.required]],

      datenaissance: ['', [Validators.required]],
    });
  }

  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.subjectArray.length < 5) {
      this.subjectArray.push({ name: value.trim() });
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic languages */
  remove(subject: Subject): void {
    const index = this.subjectArray.indexOf(subject);
    if (index >= 0) {
      this.subjectArray.splice(index, 1);
    }
  }

  /* Date */

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.editForm.controls[controlName].hasError(errorName);
  };

  /* Update book */
  updateUserForm() {
    console.log(this.editForm.value);
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.userService.updateUser(id, this.editForm.value).subscribe((res) => {
        this.router.navigate(["/admin/admin-sakkani/list-user"]);
      });
    }
  }
}
