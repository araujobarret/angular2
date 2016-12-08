import { Component } from '@angular/core';

@Component({
  selector: 'app-sibling-component',
  template:`
    <p>Sibling works!</p>
    <ng-content></ng-content>
  `
})
export class SiblingComponentComponent{

}
