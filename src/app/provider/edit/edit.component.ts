import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Maison } from 'src/app/models/maison.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  // editForm: FormGroup;
  maison: any = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    public fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
      let id = this.route.snapshot.paramMap.get('id');
      this.gettMaisonById(id);
  }

  gettMaisonById(id) {
    this.userService.getMaisonById(id).subscribe((data) => {
      this.maison = data.payload;
    });
  }

  editForm = new FormGroup({
    type_immobilier: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    Photo: new FormControl(""),
    prix: new FormControl("", Validators.required),
  });

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.editForm.patchValue({
      Photo: file,
    });
    this.editForm.get('Photo').updateValueAndValidity();
  }

  update() {
    const formValues = this.editForm.value;
    let id = this.route.snapshot.paramMap.get('id');
    // alert(JSON.stringify(this.maison))
    this.userService.updateMaison(id, formValues)
          .subscribe((res) => {
            console.log(res)
            this.router.navigate(["/home/profil"]);
          }, (error) => {
            console.log(error)
          });
  }
}
