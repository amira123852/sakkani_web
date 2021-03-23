import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainLandpageComponent } from './main-landpage/main-landpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [MainNavbarComponent, MainFooterComponent, MainLandpageComponent, AboutusComponent, ContactComponent, HomePageComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class GuestModule { }
