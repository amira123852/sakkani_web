import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-employee-create',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() maisonsDetails = { type_immobilier:"",description :"",photo_url :"", annonceur:""  }

  constructor(

    public router: Router
  ) { }

  ngOnInit() { }



}
