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
import { EditUserComponent } from './edit-user/edit-user.component';
import { DescriptionUserComponent } from './description-user/description-user.component';
import { EditProfilAdminComponent } from './edit-profil-admin/edit-profil-admin.component';
import { InfoProfilComponent } from './info-profil/info-profil.component';
// import { GuestModule } from '../guest/guest.module';
// import { MainFooterComponent } from '../guest/main-footer/main-footer.component';

@NgModule({
  declarations: [HomepageadminComponent, NavbaradminComponent, SidebaradminComponent, AdminUserListComponent, AdminResidenceListComponent, ListContactComponent, DashAdminComponent, EditUserComponent, DescriptionUserComponent, EditProfilAdminComponent, InfoProfilComponent],
  imports: [
    CommonModule ,
    AdminRoutingModule,
    RouterModule,
    MaterialModule,
    OrderModule,
    NgxPaginationModule,


  ],
  exports: [AdminRoutingModule]
})
export class AdminModule { }
