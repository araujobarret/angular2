import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styles: []
})
export class DataDrivenComponent implements OnInit {
  // (<FormArray>form.controls['']).push(new FormControl('', asdsadas, asdsa);
  form: FormGroup;

  genders = ['male' , 'female'];

  constructor() {
    this.form = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('Max', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
      }),
      'password': new FormControl('', Validators.required),
      'gender': new FormControl('male')
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form);
  }

}
