import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
  p:number = 1;
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
      key:string = 'id';
      reverse:boolean =false;
      sort(key){
        this.key = key;
        this.reverse = !this.reverse;
      }
      deleteMe(id:any, i:any) {
        console.log(id);
        if(window.confirm('Do you want to delete message?')) {
          this.adminService.deleteContact(id).subscribe((res) => {
            this.contacts.splice(i, 1);
          })
        }
      }}
