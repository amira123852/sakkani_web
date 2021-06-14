import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageadminComponent } from './homepageadmin/homepageadmin.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { SidebaradminComponent } from './sidebaradmin/sidebaradmin.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { AdminResidenceListComponent } from './admin-residence-list/admin-residence-list.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [HomepageadminComponent, NavbaradminComponent, SidebaradminComponent, AdminUserListComponent, AdminResidenceListComponent, ListContactComponent, DashAdminComponent],
  imports: [
    CommonModule ,
    AdminRoutingModule,
    RouterModule,
    MaterialModule,
    OrderModule,
    NgxPaginationModule

  ],
  exports: [AdminRoutingModule]
})
export class AdminModule { }
