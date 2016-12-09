import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template:`
    <h2>app works!</h2>
    <app-lifecycle *ngIf="!delete"></app-lifecycle>
    <button (click)="delete = true">Delete</button>
  `
})
export class AppComponent {
  delete = false;
}
