import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  template: `
    <h3>Please sign up to use all features</h3>
    <form [formGroup]="myForm" (ngSubmit)="onSignup()">
      <div class="form-group">
        <label for="email">E-Mail</label>
        <input formControlName="email" type="email" id="email" #email class="form-control">
        <span *ngIf="!email.pristine && email.errors != null && email.errors['noEmail']">Invalid mail address</span>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input formControlName="password" type="password" id="password" class="form-control">
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input formControlName="confirmPassword" type="password" id="confirm-password" #confirmPassword class="form-control">
        <span *ngIf="!confirmPassword.pristine && confirmPassword.errors != null && confirmPassword.errors['passwordsNotMatch']">Passwords do not match</span>
      </div>
      <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Sign Up</button>
    </form>
  `
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}
