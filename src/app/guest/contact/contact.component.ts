import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private subscription: Subscription;
  contactForm : FormGroup;

  submitted = false;
contact: Contact;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private snackBar:MatSnackBar) { }
    ngOnInit() {


  this.contactForm = this.formBuilder.group({
    nom: new FormControl('', Validators.required),
email: new FormControl('', Validators.required),
telephone: new FormControl('', Validators.required),
message: new FormControl('', Validators.required)

});
    }
onSubmit() {
  this.submitted = true;

  // stop here if form is invalid

}







  // get power() { return this.registerForm.get('power'); }

  public contactFormm() {
    this.userService.postContact(this.contactForm.value).subscribe({
      next: (response) => {
        this.snackBar.open(response.message,'informations envoyé !');
        this.router.navigate(['/home']);
      },

      complete:console.log

    });



  }

  ngOnDestroy(): void {

    //this.subscription.unsubscribe();
  }
    // console.log(this.addForm.value);
    //console.log(this.authentication.currentUserValue._id);







  }



