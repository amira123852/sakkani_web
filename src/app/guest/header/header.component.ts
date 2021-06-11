import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private autheService : AuthenticationService) { }
  isLoggedIn$ : Observable<boolean>;
  ngOnInit() {
    this.isLoggedIn$ = this.autheService.isUserLoggedIn;
  }
  }
