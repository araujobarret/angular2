import {LogService} from "./log.service";
import {Injectable} from "@angular/core";

@Injectable()
export class DataService {
  private data: string[] = [];

  constructor(private logService: LogService){}

  addData(word: string){
    this.data.push(word);
    this.logService.writeToLog('Saved item: ' + word);
  }

  getData(){
    return this.data;
  }

}
