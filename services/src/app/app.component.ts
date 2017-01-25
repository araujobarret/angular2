import { Component } from '@angular/core';
import {LogService} from "./log.service";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  value  = '';
  items:string[];
  constructor(private logService: LogService, private dataService:DataService){  }

  onLog(value: string){
    this.logService.writeToLog(value);
  }

  onStore(value: string){
    this.dataService.addData(value);
  }

  onGet(){
    this.items = this.dataService.getData().slice(0);
  }

}
