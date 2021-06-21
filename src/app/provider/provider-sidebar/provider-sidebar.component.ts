import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { MaisonService } from 'src/app/maison.service';

@Component({
  selector: 'app-provider-sidebar',
  templateUrl: './provider-sidebar.component.html',
  styleUrls: ['./provider-sidebar.component.css']
})
export class ProviderSidebarComponent implements OnInit {
  maisons:any = [];
  users:any = [];

  constructor(     private router: Router,
    private autheService: AuthenticationService, private maisonService: MaisonService) { }


  ngOnInit():void
{
  this.maisonService.GetHouses().subscribe(
    data =>{
      this.users = data.payload;
      console.log(this.users);
    });

    this. maisonService.GetHouses().subscribe(
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
      this.maisonService.deleteMaison(id).subscribe((res) => {
        this.maisons.splice(i, 1);
      })
    }
  }
  click(id){
    alert(id)
  }
}
