import { Component, OnInit } from '@angular/core';
import {Ingredients} from "../shared/ingredients";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  items: Ingredients[];
  selectedItem: Ingredients = null;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

  onSelectItem(item: Ingredients){
    this.selectedItem = item;
  }

  onClearEvent(){
    this.selectedItem = null;
  }

}
