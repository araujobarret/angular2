import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  searchStr: string;

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchMusic(){
    console.log(this.searchStr);
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe((res: any) =>{
        console.log(res);
      });
  }

}
