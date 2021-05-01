import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    ProviderRoutingModule
  ]
})
export class ProviderModule { }
