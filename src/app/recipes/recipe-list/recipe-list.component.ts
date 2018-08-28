import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [] = [
    new Recipe('Test', 'a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg'),
    new Recipe('test2', 'another test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Shahi_Paneer_%26_Butter_Naan.jpg/250px-Shahi_Paneer_%26_Butter_Naan.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
