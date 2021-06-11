import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  constructor( private adminService : AdminService) { }
  contacts :any = [];

    ngOnInit():void
  {
      this.adminService.GetContacts().subscribe(
        data =>{
          this.contacts = data.payload;
          console.log(this.contacts);
        });
      }

}
