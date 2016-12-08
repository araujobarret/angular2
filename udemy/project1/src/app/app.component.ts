import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template:`
    <h2>app works!</h2>
    <app-another></app-another>
    <app-sibling-component>Loading...</app-sibling-component>
  `
})
export class AppComponent {
}
