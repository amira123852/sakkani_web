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
import { AuthGuard } from './_helpers/auth.guard';
import { AdminGuard } from './_helpers/admin.guard';
import { DescriptionResidenceComponent } from './guest/description-residence/description-residence.component';
import { AideComponent } from './guest/aide/aide.component';
import { ProviderProfilComponent } from './provider/provider-profil/provider-profil.component';
import { EditComponent } from './provider/edit/edit.component';
import { ListReservationComponent } from './provider/list-reservation/list-reservation.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainLandpageComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'about', component: AboutusComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'add',
        component: AddComponent,
        data: { title: 'Add Residence' },
        canActivate: [AuthGuard],
      },
      {
      path: 'profil',
      component: ProviderProfilComponent,
      data: { title: 'profil' },
      canActivate: [AuthGuard],
      },
      // {
      //   path: 'sidebar',
      //   component: ProviderProfilComponent,
      //   data: { title: 'profil' },
      //   canActivate: [AuthGuard],
      //   },
      {
        path: 'listres',
        component: ListReservationComponent,
        data: { title: 'listres' },
        canActivate: [AuthGuard],
      },
      {
        path: 'edit/:id',
        component: EditComponent,
        data: { title: 'edit' },
        canActivate: [AuthGuard],
      },
      {
        path: 'show-residences',
        component: ShowResidenceComponent,
        data: { title: 'Show Residences' },
      },
      {
        path: 'description/:id',
        component: DescriptionResidenceComponent,
        data: { title: 'description' },
      },

      { path: 'search', component: SearchResidenceComponent },

      { path: 'contact', component: ContactComponent },
      { path: 'aide', component: AideComponent },

    ],
  },

  //{ path: 'admin', component: HomepageadminComponent },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    // canActivate:[AuthGuard,AdminGuard]
  },

  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
