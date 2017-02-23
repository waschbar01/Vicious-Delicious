import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DetailPagePage} from "../detail-page/detail-page";
import {Recipe2Page} from "../recipe2/recipe2";
import {RecipeEggtoastPage} from "../recipe-eggtoast/recipe-eggtoast";
/*
  Generated class for the Recipes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {
  constructor(public navCtrl: NavController) {

  }

  /* TODO:
  Create a function for going to page so we don't have so many page-specific methods.
   */

  GoToDetail(){
    this.navCtrl.push(DetailPagePage);
  }

  GoToRecipe2(){
    this.navCtrl.push(Recipe2Page);
  }

  GoToRecipePage() {
    this.navCtrl.push(RecipeEggtoastPage);
  }

}
