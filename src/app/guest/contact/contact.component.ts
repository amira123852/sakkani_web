import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private subscription: Subscription;
  submitted = false;

  routerr: Router;
maison:any = [];
  contactForm = new FormGroup({
    nom: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
message: new FormControl('', Validators.required),
telephone: new FormControl('', Validators.required),

  });

  constructor(   private snackBar: MatSnackBar,    private router: Router,

    private route: ActivatedRoute ,private userService: UserService) { }

  gettMaisonById(id) {
    this.userService.getMaisonById(id)
      .subscribe(
        data =>{
          this.maison = data.payload;
          console.log(this.maison);
        });
      }

      onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
      }

      onReset() {
          this.submitted = false;
          this.contactForm.reset();
      }







      public postRes() {
        this.subscription=this.userService.postReservation(this.contactForm.value).subscribe({
          next: (response) => {
            this.snackBar.open("reservation envoyé", 'Close');
            this.router.navigate(['/home/login']);
          },
          error:(error)=>{
            this.snackBar.open("error", 'Close');
          },
          complete:console.log

        });



      }
  ngOnInit():void
{

  this.gettMaisonById(this.route.snapshot.params['id']);
}

}

