import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-description-user',
  templateUrl: './description-user.component.html',
  styleUrls: ['./description-user.component.css']
})
export class DescriptionUserComponent implements OnInit {
user: any = [];
  constructor( private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,) { }

  ngOnInit(): void {
  }
  gettuserById(id) {
    this.userService.getUserById(id).subscribe((data) => {
      this.user = data.payload;
      console.log(this.user);
    });
  }
}
