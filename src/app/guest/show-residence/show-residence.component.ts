import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-show-residence',
  templateUrl: './show-residence.component.html',
  styleUrls: ['./show-residence.component.css'],
})
export class ShowResidenceComponent implements OnInit {
  maisons:any = [];
  router: Router;

  constructor(private userService: UserService) { }


  ngOnInit():void
{
    this. userService.GetHouses().subscribe(
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

