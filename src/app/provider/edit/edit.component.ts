import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaisonService } from 'src/app/maison.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  maison: any = [];

  constructor(
    private route: ActivatedRoute,
    private userService: MaisonService,
    public fb: FormBuilder,
    private router: Router
  ) {
    var id = this.route.snapshot.paramMap.get('id');
    this.userService.getMaisonById(id).subscribe((data) => {
      this.maison = data.payload;
      this.editForm = this.fb.group({
        type_immobilier: [data.payload.type_immobilier, [Validators.required]],
        description: [data.payload.description, [Validators.required]],
        Photo: [data.payload.Photo],
        prix: [data.payload.prix, [Validators.required]]
      });
    });
  }

  ngOnInit(): void {
    this.updateMaisonForm();

  }

  updateMaisonForm() {
    this.editForm = this.fb.group({
      type_immobilier: ['', [Validators.required]],
      description: ['', [Validators.required]],
      Photo: [''],
      prix: ['', [Validators.required]]
    });
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.editForm.patchValue({
      Photo: file,
    });
    this.editForm.get('Photo').updateValueAndValidity();
  }

  update() {
    var formData: any = new FormData();

    formData.append('type_immobilier',this.editForm.get('type_immobilier').value);
    formData.append('description', this.editForm.get('description').value);
    formData.append('Photo', this.editForm.get('Photo').value);
    formData.append('prix', this.editForm.get('prix').value);

    console.log(this.editForm.value);
    var id = this.route.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.userService.updateMaison(id,formData).subscribe((res) => {
        this.router.navigate(["/home/profil"]);
        // alert("yesssssssssss")
      });
    }
    // const formValues = this.editForm.value;
    // var id = this.route.snapshot.paramMap.get('id');
    // this.userService.updateMaison(id,this.editForm.value)
    // .subscribe((res) => {
    //         alert(JSON.stringify(this.maison))
    //         console.log(res)
    //         this.router.navigate(["/home/profil"]);
    //       }, (error) => {
    //         console.log(error)
    //       });
  }
}
