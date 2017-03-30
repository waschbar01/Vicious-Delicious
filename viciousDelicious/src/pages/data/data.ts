/**
 * Generated to hold data that can be shared in all pages.
 */

export class data{

  shoppinglist: Array<Object>;
  displaylist: Array<Object>;

  constructor(){
    this.shoppinglist=[];
    this.displaylist=[];
  }


  addToList(ingredientName) {
    var found = false;
    if (this.shoppinglist.length == 0) {
      this.shoppinglist.push({name: ingredientName, amount: 1})
    } else {
      for (let ingredientList of this.shoppinglist) {
        if (ingredientList["name"] == ingredientName) {
          ingredientList["amount"]++;
          found = true;
        }
        else{
          this.shoppinglist.push({name: ingredientName, amount:1})
        }
      }
    }

    this.setDisplayList()


  }

  removeFromList(ingredientDict){
    for (var i=0; i<this.shoppinglist.length; i++){
      if (this.shoppinglist[i]==ingredientDict){
        if(this.shoppinglist[i]["amount"]>0){
          this.shoppinglist[i]["amount"]--;
          this.setDisplayList();
        }
        break;
      }

    }
  }


  setDisplayList(){
    this.displaylist=[];
    for(var i=0; i<this.shoppinglist.length; i++){
      if(this.shoppinglist[i]["amount"]>0){
        this.displaylist.push(this.shoppinglist[i]);
      }
    }
  }




}
