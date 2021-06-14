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
  type_immobilier:any ;
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
      Search(){
        if(this.type_immobilier=="" ) {
          this.ngOnInit();

        }
        else {
          this.maisons = this.maisons.filter(res => {
            return res.type_immobilier.toLocaleLowerCase().match(this.type_immobilier.toLocaleLowerCase());

          })
        }}
      click(id){
        alert(id)
      }
  }

