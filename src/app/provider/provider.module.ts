import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material/material.module';
import { AddComponent } from './add/add.component';
import { ProviderProfilComponent } from './provider-profil/provider-profil.component';
import { EditComponent } from './edit/edit.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { ProviderSidebarComponent } from './provider-sidebar/provider-sidebar.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';


@NgModule({
  declarations: [
    AddComponent,
    ProviderProfilComponent,
    EditComponent,
    ListReservationComponent,
    ProviderSidebarComponent,
    ListAnnonceComponent,
    ProviderSidebarComponent,
    ListAnnonceComponent

  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class ProviderModule { }
