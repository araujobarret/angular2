import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  template:`
    <h1>User Component</h1>
    <a [routerLink]="['../']">User</a>
    <button (click)="onNavigate()">Go home</button>
  `
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

}
