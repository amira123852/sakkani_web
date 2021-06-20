import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-info-provider',
  templateUrl: './info-provider.component.html',
  styleUrls: ['./info-provider.component.css']
})
export class InfoProviderComponent implements OnInit {
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
