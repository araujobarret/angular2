import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Hue', 'Hue é o brasilleiro fazendo brasileirice', 'http://t12.deviantart.net/aEJDWcPQhc0m7CBGHbzArVB2970=/300x200/filters:fixed_height(100,100):origin()/pre05/46de/th/pre/f/2016/229/d/8/rockman_zero_pixel_art_by_maxewenx-daea0d2.png');

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
