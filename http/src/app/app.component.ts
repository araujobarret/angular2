import { Component, OnInit } from '@angular/core';
import {HttpService} from "./http.service";
import {Subscription} from "rxjs";
import {Response} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  subs: Subscription;

  constructor(private http: HttpService){
  }

  ngOnInit(){
    this.subs = this.http.getData().subscribe(
      (data: Response) => console.log(data)
    );
  }
}
