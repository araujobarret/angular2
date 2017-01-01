import { Component, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-directive-custom',
  templateUrl: './directive-custom.component.html',
  styleUrls: ['./directive-custom.component.css']
})
export class DirectiveCustomComponent {

  constructor(private element: ElementRef, private renderer:Renderer) {
    //this.element.nativeElement.style.backgroundColor = "yellow";
    this.renderer.setElementStyle(this.element.nativeElement,
      'background-color',
      'yellow');
  }

  ngOnInit() {
  }

}
