import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  template: '{{courseName}}'
})
export class InputPropertyComponent {
  @Input('course') courseName : string = '';
  constructor(){}

}
