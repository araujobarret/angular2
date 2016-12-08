import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template:`
    <h2>app works!</h2>
    <app-another></app-another>
    <app-sibling-component>
      <div>Samara Sewing's Website</div>
    </app-sibling-component>
  `
})
export class AppComponent {
}
