import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {LogService} from "../log.service";

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent{
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

  onSend(value: string){
    this.dataService.pushData(value);
  }


}
