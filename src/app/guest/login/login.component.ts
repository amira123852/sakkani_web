import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private autheService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
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
            this.snackBar.open('Logged in', 'Close');
          } else {
            this.snackBar.open('Authentication Failed', 'Close');
          }
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.snackBar.open("Error", 'Close');
        },
        complete: console.log,
      });
  }

  ngOnInit(): void {
    if (this.autheService.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }
}
