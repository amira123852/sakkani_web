import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private userService: UserService,
    public fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateMaison();
      let id = this.route.snapshot.paramMap.get('id');
      this.gettMaisonById(id);
      this.editForm = new FormGroup({
      type_immobilier: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      Photo: new FormControl(null),
      prix: new FormControl('', Validators.required),
    });
  }

  gettMaisonById(id) {
    this.userService.getMaisonById(id).subscribe((data) => {
      this.maison = data.payload;
      // this.editForm.setValue({
      //   type_immobilier: data.payload['type_immobilier'],
      //   description: data.payload['description'],
      //   Photo: data.payload['Photo'],
      //   prix: data.payload['prix']
      // });
    });
  }

  updateMaison() {
    this.editForm = this.fb.group({
      type_immobilier: ['', [Validators.required]],
      description: ['', [Validators.required]],
      Photo: [''],
      prix: ['', [Validators.required]]
    },)
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.editForm.patchValue({
      Photo: file,
    });
    this.editForm.get('Photo').updateValueAndValidity();
  }

  onSubmit() {
    // alert(JSON.stringify(this.maison))
    let id = this.route.snapshot.paramMap.get('id');
    this.userService.updateMaison(id, this.maison)
          .subscribe(res => {
            alert(res)
            this.router.navigate(["/home/profil"]);
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          });
  }
}
