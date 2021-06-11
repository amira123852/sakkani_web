import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Reservation } from 'src/app/models/reservation.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-description-residence',
  templateUrl: './description-residence.component.html',
  styleUrls: ['./description-residence.component.css']
})
export class DescriptionResidenceComponent implements OnInit {
  private subscription: Subscription;

  routerr: Router;
maison:any = [];
reservation: Reservation;
  addForm = new FormGroup({
    client: new FormControl('', Validators.required),
   house: new FormControl('', Validators.required),
 confirmation: new FormControl('', Validators.required),
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


      public postRes() {
        this.subscription=this.userService.postReservation(this.addForm.value).subscribe({
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

