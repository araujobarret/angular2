export class DataService {
  private data: string[] = [];

  addData(word: string){
    this.data.push(word);
  }

  getData(){
    return this.data;
  }

}
