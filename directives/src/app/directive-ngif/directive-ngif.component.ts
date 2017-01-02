import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngif',
  templateUrl: './directive-ngif.component.html',
  styleUrls: ['./directive-ngif.component.css']
})
export class DirectiveNgifComponent implements OnInit {

  //numbers: number[] = [1, 2, 3, 4, 5];

  courses: string[] = ['Angular 2'];
  showCourses:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onShowCourses(){
    this.showCourses = !this.showCourses;
  }

}
