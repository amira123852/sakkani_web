import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageadminComponent } from './homepageadmin/homepageadmin.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { SidebaradminComponent } from './sidebaradmin/sidebaradmin.component';
const routes: Routes = [
  {path: '', redirectTo: 'admin-sakkani', pathMatch: 'full'},
  {
    path: 'admin-sakkani',
    component: HomepageadminComponent,

    children: [
      {path: '', redirectTo: 'admin-dashboard', pathMatch: 'full'},
      {path: 'admin-dashboard', component: NavbaradminComponent},
      {path: 'admin-dashboard', component: SidebaradminComponent}
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
