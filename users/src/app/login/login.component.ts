import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  isSignUp: boolean = true;
  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    // Se não for cadastro novo efetua o SignIn
    if(!this.isSignUp){
      this.auth.signIn(this.formLogin.value);
      this.router.navigate(['/menu']);
    }
    else
      this.auth.signUp(this.formLogin.value);

  }

  setOnSignUp(flag: boolean){
    this.isSignUp = flag;
  }

}
