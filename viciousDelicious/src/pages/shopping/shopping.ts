import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {data} from "../data/data";

/*
  Generated class for the Shopping page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shopping',
  templateUrl: 'shopping.html'
})
export class ShoppingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public cart: data) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingPage');
  }


  remove(ingredient){
    this.cart.removeFromList(ingredient);
  }

}


