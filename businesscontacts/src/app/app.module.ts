import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import {FirebaseService} from "./services/firebase.service";

var config = {
  apiKey: "AIzaSyCOhVsf5L2Bc0ffNyPYZULDi82Yg1GlQ9I",
  authDomain: "businesscontacts-de6b3.firebaseapp.com",
  databaseURL: "https://businesscontacts-de6b3.firebaseio.com",

};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
