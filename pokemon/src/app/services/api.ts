import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService{

  constructor(private _http: Http){}

  getPokemon(id: string){
    return this._http.get("http://pokeapi.co/api/v2/pokemon/" + id)
      .map(response => response.json());
  }

}
