import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .pipes {
      margin: 32px;
      padding: 32px;
    }
  `]
})
export class AppComponent {
  myValue: string = "lowercase";
  myDate = new Date(2017, 1, 30);
  values = ['Meat', 'Chicken', 'Pork'];
  asyncValue = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve('Data is here'), 2000);
  });
}
