import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-show-residence',
  templateUrl: './show-residence.component.html',
  styleUrls: ['./show-residence.component.css'],
})
export class ShowResidenceComponent implements OnInit {
  maisons:any = [];
  type_immobilier:any ;
  constructor(     private router: Router,
    private autheService: AuthenticationService, private userService: UserService) { }


  ngOnInit():void
{
    this. userService.GetHouses().subscribe(
      data =>{
        this.maisons = data.payload;
        console.log(this.maisons);
      });
    }
    public logout() {
      try {
       this.autheService.logout();
          this.router.navigate(['/home']);
       } catch (error) {
        console.log('Error', error);
       }
       }
       Search(){
        if(this.type_immobilier=="" ) {
          this.ngOnInit();

        }
        else {
          this.maisons = this.maisons.filter(res => {
            return res.type_immobilier.toLocaleLowerCase().match(this.type_immobilier.toLocaleLowerCase());

          })
        }}


  deleteMa(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.userService.deleteMaison(id).subscribe((res) => {
        this.maisons.splice(i, 1);
      })
    }
  }
  click(id){
    alert(id)
  }
}

