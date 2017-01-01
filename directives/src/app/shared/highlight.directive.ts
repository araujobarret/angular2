import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.renderer.setElementStyle(this.element.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setElementStyle(this.element.nativeElement, 'background-color', 'white');
  }

  constructor(private element: ElementRef, private renderer: Renderer) {

  }

}
