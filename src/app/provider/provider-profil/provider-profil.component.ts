import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-provider-profil',
  templateUrl: './provider-profil.component.html',
  styleUrls: ['./provider-profil.component.css']
})
export class ProviderProfilComponent implements OnInit {
  maisons:any = [];

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


  deleteMa(id:any, i:any) {
    console.log(id);
    if(window.confirm('tu veux supprimer cette annonce?')) {
      this.userService.deleteMaison(id).subscribe((res) => {
        this.maisons.splice(i, 1);
      })
    }
  }
  click(id){
    alert(id)
  }
}
