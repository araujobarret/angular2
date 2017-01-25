import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-list-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.css']
})
export class ListItemComponent implements OnInit {

  @Input() recipe: Recipe;
  recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
