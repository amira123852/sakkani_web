import { Component, OnInit } from '@angular/core';
import { MaisonService } from 'src/app/maison.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-admin-residence-list',
  templateUrl: './admin-residence-list.component.html',
  styleUrls: ['./admin-residence-list.component.css']
})
export class AdminResidenceListComponent implements OnInit {
  constructor( private userService : UserService) { }
  maisons :any = [];

    ngOnInit():void
  {
      this.userService.GetHouses().subscribe(
        data =>{
          this.maisons = data.payload;
          console.log(this.maisons);
        });
      }

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

