import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CategoryListComponent } from '../category-list/category-list';
import { ProductListComponent } from '../product-list/product-list';


@Component({
   selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

  //Constructor
  constructor(private nav: NavController){}

  //pageMessage: string = "This is the HomePage component!";

   goToCategories(){
      console.log("goToCategories() function called!");

        this.nav.push(CategoryListComponent); 
    }

   goToProducts(){
      console.log("goToProducts() function called!");

        this.nav.push(ProductListComponent); 
  }

} //end of class
