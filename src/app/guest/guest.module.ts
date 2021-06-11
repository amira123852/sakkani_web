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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowResidenceComponent } from './show-residence/show-residence.component';
import { SearchResidenceComponent } from './search-residence/search-residence.component';
import { ConsumerModule } from '../consumer/consumer.module';
import { EditResidenceComponent } from './edit-residence/edit-residence.component';
import { HeaderComponent } from './header/header.component';
import { AideComponent } from './aide/aide.component';


@NgModule({
  declarations: [
    MainNavbarComponent,
    MainFooterComponent,
    MainLandpageComponent,
    AboutusComponent,
    ContactComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    ShowResidenceComponent,
    SearchResidenceComponent,
    EditResidenceComponent,
    HeaderComponent,
    AideComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConsumerModule
  ],
  exports:[]
})
export class GuestModule { }
