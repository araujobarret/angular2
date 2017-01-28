import { Component, OnInit } from '@angular/core';
import {Ingredients} from "../shared/ingredients";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {
  isAdd: boolean = true;
  item: Ingredients;
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(ingredient: Ingredients){
    if(!this.isAdd){

    }
    else {
      this.item = new Ingredients(ingredient.name, ingredient.amount);
      this.sls.addItem(ingredient);
    }
  }

}
