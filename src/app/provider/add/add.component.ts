import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MaisonService } from 'src/app/maison.service';


@Component({ templateUrl: 'add.component.html' })
export class AddComponent implements OnInit {
    Addform: FormGroup;
    id!: string;


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private maisonService: MaisonService,
    ) {}

    ngOnInit() {





        this.Addform = this.formBuilder.group({
          type_immobilier: ['', Validators.required],
            description: ['', Validators.required],
           photo_url : ['', Validators.required],
            prix: ['', Validators.required]

        }, );


    }

    // convenience getter for easy access to form fields



        // stop here if form is invalid

    public createMaison()
   {
        this.maisonService.create(
          this.Addform.value.type_immobilier,
          this.Addform.value.description ,
          this.Addform.value.photo_url,
          this.Addform.value.prix,
         )
            .pipe(first())
            .subscribe(() =>
             {
                this.router.navigate(['/home/show_residence'])
              })
    }

  /*  private updateUser() {
        this.maisonService.update(this.id, this.Addform.value)
            .pipe(first())
            .subscribe(() => {
                this.router.navigate(['/home/show_residence']);
            })
    } */
}
