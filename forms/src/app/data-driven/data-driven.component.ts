import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styles: []
})
export class DataDrivenComponent implements OnInit {
  // (<FormArray>form.controls['']).push(new FormControl('', asdsadas, asdsa);
  form: FormGroup;

  genders = ['male' , 'female'];

  constructor(private formBuilder: FormBuilder) {
    // this.form = new FormGroup({
    //   'userData': new FormGroup({
    //     'username': new FormControl('Max', Validators.required),
    //     'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
    //   }),
    //   'password': new FormControl('', Validators.required),
    //   'gender': new FormControl('male'),
    //   'hobbies': new FormArray([
    //     new FormControl('Cooking', Validators.required)
    //   ])
    // });

    this.form = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['Max', [Validators.required, this.exampleValidator]],
        'email': ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]]
      }),
      'password': ['', Validators.required],
      'gender': ['male'],
      'hobbies': formBuilder.array([
        ['Cooking', Validators.required, this.asyncExampleValidator]
      ])
    });
  }

  onAddHobby() {
    (<FormArray>this.form.controls['hobbies']).push(new FormControl('', Validators.required, this.asyncExampleValidator));
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form);
  }

  exampleValidator(control: FormControl): {[s:string]:boolean} {
    if(control.value === 'Example'){
      return {example: true};
    }
    return null;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if(control.value === 'Example') {
            resolve({'invalid': true});
          }
          else {
            resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }

}
