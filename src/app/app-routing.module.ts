import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainLandpageComponent } from './guest/main-landpage/main-landpage.component';
import { AboutusComponent } from './guest/aboutus/aboutus.component';
import { ContactComponent } from './guest/contact/contact.component';
import { HomePageComponent } from './guest/home-page/home-page.component';
import { RegisterComponent } from './guest/register/register.component';
import { LoginComponent } from './guest/login/login.component';

const routes: Routes = [
  {path: 'home', component: MainLandpageComponent,
  children:[
    {path:'',component:HomePageComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'about', component:AboutusComponent},

    {path:'contact',component:ContactComponent}
  ]},
  {path: '**', redirectTo:'home', pathMatch:"full"}
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
