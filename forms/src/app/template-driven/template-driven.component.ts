import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
    .ng-invalid {
      border-color: red;
    }
  `]
})
export class TemplateDrivenComponent {
  user = {
    username: 'Carl',
    email: 'test@mail.com',
    password: 'test'
  };

  onSubmit(form: NgForm){
    console.log(form.value);
  }

}
