import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-aide',
  templateUrl: './aide.component.html',
  styleUrls: ['./aide.component.css']
})
export class AideComponent implements OnInit {

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
