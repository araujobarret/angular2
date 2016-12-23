import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit,
  AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  template: `
    
  `
})
export class LifeCycleComponent implements OnInit, DoCheck, OnChanges, AfterContentChecked
  ,AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy{

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
