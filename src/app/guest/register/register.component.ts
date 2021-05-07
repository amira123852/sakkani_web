import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit,OnDestroy {
  registerForm: FormGroup;
  private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private snackBar:MatSnackBar) { }

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      telephone: ['', Validators.required],
      ville: ['', Validators.required],
      datenaissance: ['', Validators.required],

    });
  }



  public registerUser() {
    this.subscription=this.userService.register(this.registerForm.value).subscribe({
      next: (response) => {
        this.snackBar.open(response.message,'X');
        this.router.navigate(['/home/login']);
      },
      error:(error)=>{
        this.snackBar.open(error,'X');
      },
      complete:console.log

    });



  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
