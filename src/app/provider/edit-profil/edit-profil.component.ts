import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/admin/edit-user/edit-user.component';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList;
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
    if(confirm("Are you sure to update ")) {
      console.log("Implement delete functionality here");
           this.userService.updateUser(id, this.editForm.value).subscribe((res) => {
        this.router.navigate(["/home/info"]);
      });
    }
  }
}
