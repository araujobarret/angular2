/**
 * Created by root on 21/03/17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
  private username: string;
  private client_id = '6f8781bb0f3293c7f285';
  private client_secret = '36d63a79681704b9285315e4d6b1faf95bd20061';

  constructor(private _http: Http){
    console.log('GitHub Service Ready...');
    this.username = 'tiamatpontal';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  updateUser(username: string){
    this.username = username;
  }

}
