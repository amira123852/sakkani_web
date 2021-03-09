import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestioncComponent } from './gestionc/gestionc.component';
import { GestionrComponent } from './gestionr/gestionr.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ParametreComponent } from './parametre/parametre.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'admin', component: LoginComponent},
  {path: 'gestionc', component: GestioncComponent},
  {path: 'gestionr', component: GestionrComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'parametre', component: ParametreComponent},
  {path: 'dashboard', component: DashboardComponent}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
