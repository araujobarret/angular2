import { Component, OnInit } from '@angular/core';
import {GitHubService} from "../services/github.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})

export class ProfileComponent implements OnInit {

  user: any;
  repos: any[];
  username: string;

  constructor(private _gitHubService: GitHubService) { }

  ngOnInit() {
    this.user = null;
  }

  searchUser(){
    this._gitHubService.updateUser(this.username);

    this._gitHubService.getUser().
    subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this._gitHubService.getRepos().
    subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

}
