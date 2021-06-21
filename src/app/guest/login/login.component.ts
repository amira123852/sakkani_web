import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  private subscription: Subscription;
  // isLoggedIn : Observable<boolean>;
  constructor(
    private autheService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {
      //  this.isLoggedIn = this.autheService.isUserLoggedIn;
    this.loginForm = fb.group({
      email: [''],
      password: [''],
    });
  }

  public login() {
    this.autheService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: (value) => {
          if (value?.token) {
            this.snackBar.open('tu sera connecté', 'Close');
          } else {
            this.snackBar.open('Authentication Failed', 'Close');
          }
          this.router.navigate(['/home/show-residences']);
        },
        error: (error) => {
          this.snackBar.open("veuillez vous inscrire Svp", 'Close');
        },
        complete: console.log,
      });
  }
 public logout() {
  try {
   this.autheService.logout();
      this.router.navigate(['/home/login']);
   } catch (error) {
    console.log('Error', error);
   }
   }



  ngOnInit():

  void {
    if (this.autheService.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }
}
