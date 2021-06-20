import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageadminComponent } from './homepageadmin/homepageadmin.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { SidebaradminComponent } from './sidebaradmin/sidebaradmin.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { AdminResidenceListComponent } from './admin-residence-list/admin-residence-list.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DescriptionUserComponent } from './description-user/description-user.component';
import { InfoProfilComponent } from './info-profil/info-profil.component';
const routes: Routes = [
  {path: '', redirectTo: 'admin-sakkani', pathMatch: 'full'},
  {
    path: 'admin-sakkani',
    component: HomepageadminComponent,

    children: [
      {path: '', redirectTo: 'admin', pathMatch: 'full'},
      {path: 'admin-dashboard', component: NavbaradminComponent},
      {path: 'admin-dashboard', component: SidebaradminComponent},
      {path: 'admin', component: DashAdminComponent},

      {path: 'list-user', component:AdminUserListComponent},
      {path: 'list-residence', component:AdminResidenceListComponent},
      {path: 'editu/:id', component:EditUserComponent},
      {path: 'profil-admin', component:InfoProfilComponent},

      {path: 'list-contact', component:ListContactComponent},
      {path: 'description-user', component:DescriptionUserComponent}

    ]
  }
  //   {path: 'admin-dashbord', component: HomepageadminComponent ,
  // children : [
  //   {path:'' , component:NavbaradminComponent }
  // ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule ,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
