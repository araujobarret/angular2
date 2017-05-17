import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiService} from "../../app/services/api";

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class Main {
  pokemon: any = null;
  search: string = "";

  constructor(private _api: ApiService, public navCtrl: NavController, public navParams: NavParams) {
  }

  private searchPokemon(name: string){
    console.log(name);
    if(name != null || name != "")
    {

      this._api.getPokemon(name)
        .subscribe((response) => {
          this.pokemon = response;
          this._api.getPokemonImage(this.pokemon.forms[0].url)
            .subscribe((image) => {
              this.pokemon.image = image.sprites.front_default;
              console.log(image)
            },
              (err) => console.log("ERROR"));
        },
        (err) => {
          this.pokemon = null;
          console.log(this.pokemon);
        });

    }
  }

  ionViewDidLoad() {
    this.searchPokemon("1");
  }

}
