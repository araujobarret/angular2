import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiService} from "../../app/services/api";

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class Main {
  pokemon: any;

  constructor(private _api: ApiService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Main');
    this._api.getPokemon("asdas")
      .subscribe((response) => {
        this.pokemon = response;
        console.log(this.pokemon.status);
      },
      (err) => {
        this.pokemon = null;
        console.log(this.pokemon);
      });
  }

}
