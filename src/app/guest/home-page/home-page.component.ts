import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaisonService } from 'src/app/maison.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  maisons:any = [];
  router: Router;

  constructor(private userService: MaisonService) { }


  ngOnInit():void
{
    this. userService.GetHouses().subscribe(
      data =>{
        this.maisons = data.payload;
        console.log(this.maisons);
      });
    }




}

