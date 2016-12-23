import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <div>
        <button class="btn btn-primary" (click)="decrement()">-</button>
        <input type="text" readonly [value]="value"/>
        <button class="btn btn-primary" (click)="increment()">+</button>
      </div>
  `
})
export class OutputPropertyComponent {

  @Input() value : number = 0;

  @Output() event = new EventEmitter();

  constructor() { }

  decrement(){
    this.value--;
    this.event.emit("Novo valor" + this.value);
  }

  increment(){
    this.value++;
    this.event.emit("Novo valor" + this.value);
  }
}
