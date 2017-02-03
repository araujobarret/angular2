import { Component } from '@angular/core';
import {HttpService} from "./http.service";
import {Subscription} from "rxjs";
import {Response} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  items: any[] = [];
  asyncString = this.http.getData();

  constructor(private http: HttpService){
  }

  onSubmit(username: string, email: string){
    this.http.sendData({username: username, email: email}).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onGetData(){
    this.http.getOwnData().subscribe(
      data => {
        const array = []
        for(let key in data) {
          array.push(data[key]);
        }
        this.items = array;
      }
    );
  }

}
