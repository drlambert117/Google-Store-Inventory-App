import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-product-detail',
    templateUrl: 'product-detail.html'
})
export class ProductDetailComponent {

    category: any;
    selectedProduct: any;
    // products: any[];
    // selectedProducts: any[];

    //constructor
    constructor(public navCtrl: NavController, 
                private navParams: NavParams) {
        console.log("ProductDetailComponent constructor called!");

        this.selectedProduct = this.navParams.data;
        console.log("this.selectedProduct:");
        console.dir(this.selectedProduct);





    }
 
 

} //end of component class
