import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {
  public currentUser$:Observable<any>;

  public connected:boolean=false;
  public subcription: Subscription;

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
    this.currentUser$=this.authenticationService.currentUser;
   this.subcription=this.authenticationService.currentUser.subscribe({
     next: user => {
       if(user){
         this.connected=true
       }else{
         this.connected=false
       }
     },
     error:console.log,
     complete:console.log}
     );
  }

  logout(){
    localStorage.clear();
    location.reload();
  }
}
