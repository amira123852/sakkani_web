import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from 'src/app/admin.service';
import { DialogService } from 'src/app/guest/dialog.service';
import { NotificationService } from 'src/app/guest/notification.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  constructor( private adminService : AdminService
    ,private dialogService:DialogService, private notificationservice:NotificationService
    ) { }
users :any = [];
nom :any;
p:number = 1;
@ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit():void
{
    this.adminService.GetUsers().subscribe(
      data =>{
        this.users = data.payload;
        console.log(this.users);
      });
    }

  deleteUs(id:any, i:any) {
    this.dialogService.openConfirmDialog('vous etes sur de supprimer cet utilisateur ?')
    .afterClosed()
      .subscribe(res =>{
        if(res){
        this.adminService.deleteUser(id).subscribe((res)=>{
          this.notificationservice.success('! suppression terminé');
          this.users.splice(i, 1);
        })
      }
    });
  }


  Search(){
    if(this.nom=="") {
      this.ngOnInit();

    }
    else {
      this.users = this.users.filter(res => {
        return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
      })
    }

  }
  key:string = 'id';
  reverse:boolean =false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

}

