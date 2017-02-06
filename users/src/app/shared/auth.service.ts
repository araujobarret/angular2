import { Injectable } from '@angular/core';
import {User} from "./user";
import {Router} from "@angular/router";

declare var firebase: any;

@Injectable()
export class AuthService {

  constructor(private router: Router){}

  signUp(user:User){
    firebase.auth().createUserWithEmailAndPassword(user.login, user.password).catch(function(error){
      console.log(error);
    });
  }

  signIn(user:User){
    firebase.auth().signInWithEmailAndPassword(user.login, user.password).catch(function(error){
      console.log(error);
    });
  }

  logout(){
    firebase.auth().signOut();
    this.router.navigate(['./login']);
  }

  isAuthenticated(){
    var user = firebase.auth().currentUser;

    if(user)
      return true;
    else
      return false;
  }

}
