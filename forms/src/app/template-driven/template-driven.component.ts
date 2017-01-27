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
  onSubmit(form: NgForm){
    console.log(form);
  }

}
