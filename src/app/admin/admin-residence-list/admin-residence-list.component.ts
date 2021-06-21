import { Component, OnInit } from '@angular/core';
import { MaisonService } from 'src/app/maison.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-admin-residence-list',
  templateUrl: './admin-residence-list.component.html',
  styleUrls: ['./admin-residence-list.component.css']
})
export class AdminResidenceListComponent implements OnInit {
  constructor( private userService : MaisonService) { }
  maisons :any = [];
  maison :any = [];

  type_immobilier:any ;
  p:number = 1;

ville:any ;

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
        if(window.confirm('Do you want to delete house?'))
       {
          this.userService.deleteMaison(id).subscribe((res) => {
            this.maisons.splice(i, 1);
          })
        }
      }
      gettMaisonById(id) {
        this.userService.getMaisonById(id).subscribe((data) => {
          this.maison = data.payload;
          console.log(this.maison);
        });
      }
      Search(){
        if(this.ville=="" ) {
          this.ngOnInit();

        }
        else {
          this.maisons = this.maisons.filter(res => {
            return res.ville.toLocaleLowerCase().match(this.ville.toLocaleLowerCase());

          })
        }}
      click(id){
        alert(id)
      }
      key:string = 'id';
      reverse:boolean =false;
      sort(key){
        this.key = key;
        this.reverse = !this.reverse;
      }

  }

