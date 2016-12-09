import { Component } from '@angular/core';

@Component({
  selector: 'app-databiding',
  templateUrl: './databiding.component.html',
  styleUrls: ['./databiding.component.css']
})
export class DatabidingComponent {
  stringInterpolation = 'This is a string interpolation.';
  numberInterpolation = 2;

  onClicked(value: string){
    alert(value);
  }
}
