import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-confirm',
  templateUrl: './list-confirm.component.html',
  styleUrls: ['./list-confirm.component.css']
})
export class ListConfirmComponent implements OnInit {
  p:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

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
