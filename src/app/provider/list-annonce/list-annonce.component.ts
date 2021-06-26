import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { MaisonService } from 'src/app/maison.service';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',

  styleUrls: ['./list-annonce.component.css']
})
export class ListAnnonceComponent implements OnInit {
  maisons: any = [];
  public maisonByUser$:any;
  maison: any = [];

  constructor(
    private router: Router,
    private autheService: AuthenticationService,
    private maisonService: MaisonService,
    private snackBar:MatSnackBar
  ) {}

  ngOnInit(): void {
    this.maisonByUser$=this.maisonService.getMaisonByuserId(this.autheService.currentUserValue?._id);


  }

  public logout() {
    try {
      this.autheService.logout();
      this.router.navigate(['/home']);
    } catch (error) {
      console.log('Error', error);
    }
  }

  deleteMa(id: any, i: any) {
    console.log(id);
    if (window.confirm('tu veux supprimer cette annonce?')) {
      this.maisonService.deleteMaison(id).subscribe((res) => {
        this.maison.splice(i, 1);
      });
    }
  }



  click(id) {
    alert(id);
  }
}
