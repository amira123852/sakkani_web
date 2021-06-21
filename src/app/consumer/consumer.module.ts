import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { DescriptionResidenceComponent } from '../guest/description-residence/description-residence.component';
import { ProfilConsumerComponent } from './profil-consumer/profil-consumer.component';


@NgModule({
  declarations: [DescriptionResidenceComponent, ProfilConsumerComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[]
})
export class ConsumerModule { }

