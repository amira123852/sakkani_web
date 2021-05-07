import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { MainLandpageComponent } from './guest/main-landpage/main-landpage.component';
import { AboutusComponent } from './guest/aboutus/aboutus.component';
import { ContactComponent } from './guest/contact/contact.component';
import { HomePageComponent } from './guest/home-page/home-page.component';
import { RegisterComponent } from './guest/register/register.component';
import { LoginComponent } from './guest/login/login.component';

import { AddComponent } from './provider/add/add.component';

import { NavbaradminComponent } from './admin/navbaradmin/navbaradmin.component';
import { HomepageadminComponent } from './admin/homepageadmin/homepageadmin.component';
import { ShowResidenceComponent } from './guest/show-residence/show-residence.component';
import { SearchResidenceComponent } from './guest/search-residence/search-residence.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainLandpageComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'about', component: AboutusComponent },
      { path: 'add', component: AddComponent },
      { path: 'show_residence', component: ShowResidenceComponent },
      { path: 'search', component: SearchResidenceComponent },

      { path: 'contact', component: ContactComponent },
    ],
  },

  //{ path: 'admin', component: HomepageadminComponent },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },

  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
