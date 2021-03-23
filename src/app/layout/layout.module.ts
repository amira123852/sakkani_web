import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PubblicityComponent } from './pubblicity/pubblicity.component';
import { FeaturedResidenceComponent } from './featured-residence/featured-residence.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LandpageComponent } from './landpage/landpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { ConsumerFilterComponent } from './consumer/consumer-filter/consumer-filter.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TurnoverComponent } from './turnover/turnover.component';
import { ShowResidenceComponent } from './show-residence/show-residence.component';


@NgModule({
  declarations: [

    NavbarComponent,
    FooterComponent,
    PubblicityComponent,
    FeaturedResidenceComponent,
    AboutComponent,
    ContactComponent,
    LandpageComponent,
    ConsumerFilterComponent,
    SidebarComponent,
    TurnoverComponent,
    ShowResidenceComponent,

  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule,LayoutRoutingModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    PubblicityComponent,
    FeaturedResidenceComponent,
    AboutComponent,
    ContactComponent,
    LandpageComponent,
    

  ],
})
export class LayoutModule {}
