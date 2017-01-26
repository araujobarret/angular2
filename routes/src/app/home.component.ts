import { Component, OnDestroy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnDestroy{
  private subscription: Subscription;

  param: string;

  constructor(private route: ActivatedRoute){
    this.subscription = route.queryParams.subscribe(
      (queryParams: any) => this.param = queryParams['that']
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
