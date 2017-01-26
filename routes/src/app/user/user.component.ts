import { Component, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  template:`
    <h1>User Component</h1>
    <button (click)="onNavigate()">Go home</button>
    {{id}}
    <hr>
    <router-outlet></router-outlet>
  `
})
export class UserComponent implements OnDestroy {
  private subscription: Subscription;

  id: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNavigate() {
    this.router.navigate(['/'], {queryParams: {'that': 100}});
  }

}
