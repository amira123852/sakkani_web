import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestioncComponent } from './gestionc/gestionc.component';
import { GestionrComponent } from './gestionr/gestionr.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ParametreComponent } from './parametre/parametre.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GestioncComponent,
    GestionrComponent,
    ReservationComponent,
    ParametreComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
