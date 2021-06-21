import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';
import { Reservation } from 'src/app/models/reservation.model';
import { UserService } from 'src/app/user.service';
import {
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { User } from 'src/app/models/user.model';
import { MaisonService } from 'src/app/maison.service';

@Component({
  selector: 'app-description-residence',
  templateUrl: './description-residence.component.html',
  styleUrls: ['./description-residence.component.css'],
})
export class DescriptionResidenceComponent implements OnInit {
  private subscription: Subscription;
  localtair:User;
  routerr: Router;
  maison: any = [];
  reservation: Reservation;

  submitted: Boolean = false;
  comment = '';
  postComment = [];
  constructor(
    private snackBar: MatSnackBar,

    private route: ActivatedRoute,
    private userService: UserService,
    private uService: MaisonService,

    private router: Router,
    private authentication: AuthenticationService,
    private formBuilder: FormBuilder
  ) {
    this.localtair=this.authentication.currentUserValue;
  }

  gettMaisonById(id) {
    this.uService.getMaisonById(id).subscribe((data) => {
      this.maison = data.payload;
      console.log(this.maison);
    });
  }

  post() {
    this.postComment.push(this.comment);
  }

  // console.log(this.addForm.value);
  //console.log(this.authentication.currentUserValue._id);

  postRes() {
    const body={client:this.localtair._id,house:this.maison._id}
    this.userService.postReservation(body).subscribe(
      (response) => {
        this.snackBar.open('reservation envoyee', 'Close');

        // this.router.navigate(['/home/show-residences']);
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {}

  ngOnInit(): void {
    this.gettMaisonById(this.route.snapshot.params['id']);
  }
}
