import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup;

  constructor(
    private autheService:AuthenticationService,
    private fb:FormBuilder,
    private router:Router) {
     this.loginForm=fb.group({
       email:[''],
       password:['']
     })
   }

   public login(){
     this.autheService.login(
       this.loginForm.value.email,
       this.loginForm.value.password
       ).subscribe({
         next:(value)=>{
          this.router.navigate(['/home']);
         },
         error:(error)=>alert(JSON.stringify(error)),
         complete:console.log
       });


   }

  ngOnInit(): void {
  }

}
