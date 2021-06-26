import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { DialogService } from 'src/app/guest/dialog.service';
import { NotificationService } from 'src/app/guest/notification.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {
reservations :any [] ;
p:number = 1;


  constructor(private router: Router
    ,private dialogService:DialogService,
     private notificationservice:NotificationService,

    private autheService: AuthenticationService, private userService: UserService) { }

  ngOnInit(): void {
    this. userService.GetReservations().subscribe(
      data =>{
        this.reservations = data.payload;
        console.log(this.reservations);
      });
    }
    // confirmRes(id:any, i:any) {
    //     console.log(id);
    //     if(window.confirm('Do you want to update house?'))
    //    {
    //       this.userService.updateReservation(id).subscribe((res) => {
    //         this.reservations.splice(i, 1);
    //       })
    //     }
    //   }
    deleteRes(id:any, i:any) {
      this.dialogService.openConfirmDialog('vous etes sur de supprimer cette reservation ?')
      .afterClosed()
        .subscribe(res =>{
          if(res){
          this.userService.deleteReservation(id).subscribe((res)=>{
            this.notificationservice.success('! suppression terminé');
            this.reservations.splice(i, 1);
          })
        }
      });
    }
    key:string = 'id';
    reverse:boolean =false;
    sort(key){
      this.key = key;
      this.reverse = !this.reverse;
    }
  }


