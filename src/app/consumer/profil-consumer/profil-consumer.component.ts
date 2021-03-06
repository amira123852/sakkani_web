import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profil-consumer',
  templateUrl: './profil-consumer.component.html',
  styleUrls: ['./profil-consumer.component.css']
})
export class ProfilConsumerComponent implements OnInit {

  user: any = [];
  values = JSON.parse(localStorage.getItem("currentUser"));
  idUser = this.values._id;

  constructor( private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,) { }

  ngOnInit(): void {
    this.userService.getUserById(this.idUser).subscribe((data)=> {
      this.user = data.payload;
    });
  }
}

