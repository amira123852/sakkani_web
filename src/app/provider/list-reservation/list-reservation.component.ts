import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {
reservations :any [] ;
  constructor(private router: Router,
    private autheService: AuthenticationService, private userService: UserService) { }

  ngOnInit(): void {
    this. userService.GetReservations().subscribe(
      data =>{
        this.reservations = data.payload;
        console.log(this.reservations);
      });
    }
  }


