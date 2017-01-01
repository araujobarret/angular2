import { Directive, HostListener, HostBinding, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightFull]'
})
export class HighlightFullDirective {

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private element: ElementRef, private renderer: Renderer) {  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    console.log("onInit");
  }

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }


}
