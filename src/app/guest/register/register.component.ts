import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MustMatch } from 'src/app/_helpers/must-match.validator';


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit,OnDestroy {
  registerForm: FormGroup;
  private subscription: Subscription;
    submitted = false;
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
      confirmPassword: ['', Validators.required],
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
}

// convenience getter for easy access to form fields

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}



  get nom() { return this.registerForm.get('nom'); }
  get  email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get telephone() { return this.registerForm.get('telephone'); }

  get   ville() { return this.registerForm.get('ville'); }
  get   datenaissance() { return this.registerForm.get('datenaissance'); }
  get f() { return this.registerForm.controls; }


  // get power() { return this.registerForm.get('power'); }

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

    //this.subscription.unsubscribe();
  }
}
