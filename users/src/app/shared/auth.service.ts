import { Injectable } from '@angular/core';
import {User} from "./user";

declare var firebase: any;

@Injectable()
export class AuthService {

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

  isAuthenticated(){
    var user = firebase.auth().currentUser;

    if(user)
      return true;
    else
      return false;
  }

}
