import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundYellow]'
})
export class BackgroundYellowDirective {

  constructor(private elementRef: ElementRef) {
    console.log(this.elementRef);
    this.elementRef.nativeElement.style.backgroundColor ="yellow";
  }

}
