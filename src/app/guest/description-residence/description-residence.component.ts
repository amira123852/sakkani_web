import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-description-residence',
  templateUrl: './description-residence.component.html',
  styleUrls: ['./description-residence.component.css']
})
export class DescriptionResidenceComponent implements OnInit {

  router: Router;
maison:any = [];

  constructor(private route: ActivatedRoute ,private userService: UserService) { }

  gettMaisonById(id) {
    this.userService.getMaisonById(id)
      .subscribe(
        data =>{
          this.maison = data.payload;
          console.log(this.maison);
        });
      }


  ngOnInit():void
{

  this.gettMaisonById(this.route.snapshot.params['id']);
}

}

