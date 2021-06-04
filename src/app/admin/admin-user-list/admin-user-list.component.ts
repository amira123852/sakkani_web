import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  constructor( private adminService : AdminService) { }
users :any = [];

  ngOnInit():void
{
    this.adminService.GetUsers().subscribe(
      data =>{
        this.users = data.payload;
        console.log(this.users);
      });
    }

  deleteUs(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.adminService.deleteUser(id).subscribe((res) => {
        this.users.splice(i, 1);
      })
    }
  }

}

