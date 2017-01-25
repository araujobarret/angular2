import {LogService} from "./log.service";
import {Injectable, EventEmitter} from "@angular/core";


@Injectable()
export class DataService {
  private data: string[] = [];

  pushedData = new EventEmitter<string>();

  constructor(private logService: LogService){}

  addData(word: string){
    this.data.push(word);
    this.logService.writeToLog('Saved item: ' + word);
  }

  getData(){
    return this.data;
  }

  pushData(value: string){
    this.pushedData.emit(value);
  }

}
