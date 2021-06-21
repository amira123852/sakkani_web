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
import { InfoProviderComponent } from './info-provider/info-provider.component';
import { UserService } from '../user.service';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { ListConfirmComponent } from './list-confirm/list-confirm.component';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AddComponent,
    ProviderProfilComponent,
    EditComponent,
    ListReservationComponent,
    ProviderSidebarComponent,
    ListAnnonceComponent,
    ProviderSidebarComponent,
    ListAnnonceComponent,
    InfoProviderComponent,
    EditProfilComponent,
    ListConfirmComponent

  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    OrderModule,
    NgxPaginationModule,

  ],
  providers:[UserService]
})
export class ProviderModule { }
