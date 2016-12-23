import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class AppComponent {
  content : string = '';
  savedContent :  string = '';
  isMouseOver : boolean = false;
  name : string = '';
  person = {name : '', age : 15}
  onClick(){
    alert("Button clicked!");
  }

  onKeyUp(event : any){
    console.log(event);
    this.content = event.target.value;
  }

  onSave(saved : string){
    this.savedContent = saved;
  }

  onMouseOver(){
    this.isMouseOver = !this.isMouseOver;
  }

  onValueChange(event){
    console.log(event);
  }

}
