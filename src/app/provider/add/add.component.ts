import { Router } from '@angular/router';
import { MaisonService } from 'src/app/maison.service';

import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Maison } from 'src/app/models/maison.model';
import { UserService } from 'src/app/user.service';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  maison: Maison;
  addForm = new FormGroup({
    type_immobilier: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    Photo: new FormControl(null),
    prix: new FormControl('', Validators.required),
  });
  constructor(
    private service: UserService,
    private router: Router,
    private authentication:AuthenticationService) {}

  ngOnInit() {}
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addForm.patchValue({
      Photo: file,
    });
    this.addForm.get('Photo').updateValueAndValidity();
  }
  onFormSubmit() {

    // console.log(this.addForm.value);
    //console.log(this.authentication.currentUserValue._id);


    var formData: any = new FormData();

    formData.append(
      'type_immobilier',
      this.addForm.get('type_immobilier').value
    );
    formData.append('description', this.addForm.get('description').value);
    formData.append('Photo', this.addForm.get('Photo').value);
    formData.append('prix', this.addForm.get('prix').value);
    formData.append('annonceur',this.authentication.currentUserValue._id);

    this.service.postMaison(formData).subscribe(
      (response) =>
      {
        this.router.navigate(['/home/show-residences']);
      },
      (error) => console.log(error)
    );
  }
}
