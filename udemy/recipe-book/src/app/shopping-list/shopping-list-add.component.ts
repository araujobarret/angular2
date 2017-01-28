import {Component, OnChanges, Input} from '@angular/core';
import {Ingredients} from "../shared/ingredients";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  isAdd: boolean = true;
  @Input() item: Ingredients;
  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes) {
    if(changes.item.currentValue === null){
      this.isAdd = true;
      this.item = {name: null, amount: null};
    }
    else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredients){
    let newIngredient: Ingredients = new Ingredients(ingredient.name, ingredient.amount);
    if(!this.isAdd){
      this.sls.editItem(this.item, newIngredient);
    }
    else {
      this.item = newIngredient;
      this.sls.addItem(ingredient);
    }
  }

}
