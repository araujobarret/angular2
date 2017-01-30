import { Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe'
import {Ingredients} from "./shared/ingredients";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Hue', 'Hue é o brasilleiro fazendo brasileirice', 'http://t12.deviantart.net/aEJDWcPQhc0m7CBGHbzArVB2970=/300x200/filters:fixed_height(100,100):origin()/pre05/46de/th/pre/f/2016/229/d/8/rockman_zero_pixel_art_by_maxewenx-daea0d2.png',
      [
        new Ingredients('Booster accell', 2),
        new Ingredients('Plasma Sword', 1)
      ]),
    new Recipe('Huehue', 'Ha ha ha ha', 'http://orig14.deviantart.net/7d70/f/2013/097/0/1/project_rcl__rockman_ciel__rebirth__by_genericmav-d60rjk5.png',
      [
        new Ingredients('Blinded dress', 1),
        new Ingredients('Wheel for jump boost', 4)
      ])
  ];

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

}
