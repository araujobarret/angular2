import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-directive-ngstyle',
  templateUrl: './directive-ngstyle.component.html',
  styleUrls: ['./directive-ngstyle.component.css']
})
export class DirectiveNgstyleComponent implements OnInit {

  active: boolean = false;
  fontSize: number = 20;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.active = !this.active;
  }

  onChange(event: any){
    this.fontSize = event.target.value;
    console.log(this.fontSize);
  }
}
