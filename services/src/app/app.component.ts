import { Component } from '@angular/core';
import {LogService} from "./log.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService]
})
export class AppComponent {
  value  = '';

  constructor(private logService: LogService){  }

  onLog(value: string){
    this.logService.writeToLog(value);
  }
}
