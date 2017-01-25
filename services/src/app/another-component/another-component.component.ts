import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {LogService} from "../log.service";

@Component({
  selector: 'app-another-component',
  templateUrl: './another-component.component.html',
  styleUrls: ['./another-component.component.css']
})

export class AnotherComponentComponent implements OnInit {
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

  ngOnInit(){
    this.dataService.pushedData.subscribe(
      data => this.value = data
    );
  }

}
