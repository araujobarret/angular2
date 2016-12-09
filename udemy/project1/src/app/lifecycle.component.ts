import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterViewChecked, AfterViewInit,
  AfterContentChecked, AfterContentInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges(){
    this.log('ngOnChanges');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }

  ngAfterViewInit(){
    this.log('ngAfterViewInit');
  }

  private log(hook: string){
    console.log(hook);
  }

}
