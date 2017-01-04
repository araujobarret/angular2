import { Component, OnInit } from '@angular/core';
import {Ingredients} from "../shared/ingredients";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  items: Ingredients[];

  constructor() { }

  ngOnInit() {
  }

}
