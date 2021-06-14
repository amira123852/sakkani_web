import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-residence',
  templateUrl: './search-residence.component.html',
  styleUrls: ['./search-residence.component.css']
})
export class SearchResidenceComponent implements OnInit {
  maisons :any = [];
  type_immobilier:any ;
  constructor() { }

  ngOnInit(): void {
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
}
