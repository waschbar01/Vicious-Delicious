import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { InstructionPage } from "../instruction/instruction";
import { data } from "../data/data";

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public cart:data, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  recipeInfo=this.navParams.get("param1");

  GoToInstructions(recipe){
    this.navCtrl.push(InstructionPage,{param1:recipe});

  }


  temporary=[];
  message = "";


  addToCart(){
    let add = this.alertCtrl.create();
    add.setTitle("Adding these ingredients?");
    for (let i of this.temporary){
      this.message += i;
      this.message += "; ";
    };
    add.setMessage(this.message);

    add.addButton({
      text: "Cancel",
      handler: () =>{
        for (let i of this.temporary) {
          var element =<HTMLInputElement> document.getElementById(i);
          element.click();
        }
        this.temporary=[];
        this.message="";
      }
    });


    add.addButton({
      text: "Confirm",
      handler: () =>{
        for (let i of this.temporary) {
          this.cart.addToList(i);

          var element = <HTMLInputElement> document.getElementById(i);
          element.click();
        }

        this.temporary=[];
        this.message="";
      }
    });

    add.present().then();
  }

  checked(ingredientName){
    for (let item of this.cart.shoppinglist){
      if (item["name"]==ingredientName){
        if (item["clicked"] == false) {
          this.temporary.push(ingredientName);
          item["clicked"] = true;
        } else {
          //var n=this.temporary.indexOf(item["name"]);
          //this.temporary.splice(n,1);
          var temporary1=[];
          for(let str of this.temporary){
            if (str!=ingredientName){
              temporary1.push(str)
            }
          }
          this.temporary=temporary1;
          item["clicked"] = false;
        }
      }
    }
  };

}
