import { Injectable } from '@angular/core';
import {User} from "./user.interface";

declare var firebase: any;

@Injectable()
export class AuthService {

  signupUser(user: User){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function(error){
        let errorCode = error.code;
        let errorMessage = error.message;
    });

  }

}
