import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductByCategoryComponent } from '../product-bycategory/product-bycategory';
import { ICategory } from './category';

@Component({
    selector: 'page-category-list',
    templateUrl: 'category-list.html'
})
export class CategoryListComponent {
    
  categories: ICategory[];

  constructor(private nav: NavController) {
      console.log("CategoryListComponent (categories-list.ts):");
      console.log("Constructor called!");

      //Fill the this.categories array with music category objects
      //  sorted by category name
      this.fillCategoryArray();
  }
  //pageMessage: string = "Our Music Categories";
  
    itemTapped($event, category){
        console.log("itemTapped function called! ");
        console.log("category:");
        console.dir(category);

        this.nav.push(ProductByCategoryComponent, category);   
    }


  private fillCategoryArray () {
    console.log("fillCategoryArray called!");

     var unsortedCategories = [
{
		"categoryCode": 1,
		"categoryName": "Phones"
	}, {
		"categoryCode": 2,
		"categoryName": "Connected Home"
	}, {
		"categoryCode": 3,
		"categoryName": "Virtual Reality"
	}, {
		"categoryCode": 4,
		"categoryName": "Streaming Devices"
	}, {
        "categoryCode": 5,
		"categoryName": "Tablets"
    }, {
        "categoryCode": 6,
		"categoryName": "Chromebooks"
    }, {
        "categoryCode": 7,
		"categoryName": "Android Wear"
    }
    ];

    //Sort the Categories by category name
    //the sort() function is a javascript function
    this.categories =
        unsortedCategories.sort((a,b) => {
            if( a.categoryName < b.categoryName) return -1;
            else if (a.categoryName > b.categoryName) return 1;
            else return 0;
        })

    console.dir(this.categories);

  } //end of fillCategoryArray function
 

} //end of component class
