import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageadminComponent } from './homepageadmin/homepageadmin.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { SidebaradminComponent } from './sidebaradmin/sidebaradmin.component';



@NgModule({
  declarations: [HomepageadminComponent, NavbaradminComponent, SidebaradminComponent],
  imports: [
    CommonModule ,
    AdminRoutingModule,
    RouterModule
  ],
  exports: [AdminRoutingModule] 
})
export class AdminModule { }
