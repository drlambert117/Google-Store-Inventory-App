import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductDetailComponent } from '../product-detail/product-detail';


@Component({
    selector: 'page-product-bycategory',
    templateUrl: 'product-bycategory.html'
})
export class ProductByCategoryComponent {

 category: any;
    products: any[];
    selectedProducts: any[];

    //constructor
    constructor(public navCtrl: NavController, 
                private navParams: NavParams) {
        console.log("ProductByCategoryComponent constructor called!");

        this.category = this.navParams.data;
        console.log("this.category:");
        console.dir(this.category);

        //Fill array of product inventory
        this.fillProductsArray();

        //Filter array for this category
        this.selectedProducts = 
            this.products.filter(p => p.categoryNumber === this.category.categoryCode);
        console.log("this.selectedProducts: ");
        console.dir(this.selectedProducts);

    }

itemTapped($event, product){
        console.log("itemTapped function called! ");
        console.log("product:");
        console.dir(product);

        this.navCtrl.push(ProductDetailComponent, product);   
    }

    private fillProductsArray() {
        console.log("fillProductsArray function called");

         this.products = [{
		"productID": 1,
        "productName": "Pixel",
        "productManufacturer": "Google",
        "productDescription": "The first phone with the Google Assistant built in.",
        "productPrice":	649.00,
        "imageName": "googlePixel.jpg",
        "categoryNumber": 1
	}, {
		"productID": 2,
        "productName": "Google Home",
        "productManufacturer": "Google",
        "productDescription": "Hands free help from the Google Assistant.",
        "productPrice":	129.00,
        "imageName": "googleHome.jpg",
        "categoryNumber": 2
	}, {
		"productID": 3,
        "productName": "Base for Google Home",
        "productManufacturer": "Google",
        "productDescription": "Colored bases for your Google Home.",
        "productPrice":	20.00,
        "imageName": "googleBase.jpg",
        "categoryNumber": 2
	}, {
		"productID": 4,
        "productName": "Google Wifi",
        "productManufacturer": "Google",
        "productDescription": "Wireless router.",
        "productPrice":	129.00,
        "imageName": "googleWifi.jpg",
        "categoryNumber": 2
	}, {
        "productID": 5,
        "productName": "Nest Learning Thermostat",
        "productManufacturer": "Nest",
        "productDescription": "Smart Thermostat (3rd generation).",
        "productPrice":	249.00,
        "imageName": "nestThermostat.jpg",
        "categoryNumber": 2
    }, {
        "productID": 6,
        "productName": "Nest Protect",
        "productManufacturer": "Nest",
        "productDescription": "Smoke and CO alarm (2nd gen).",
        "productPrice":	99.00,
        "imageName": "nestProtect.jpg",
        "categoryNumber": 2
    }, {
        "productID": 7,
        "productName": "Nest Cam",
        "productManufacturer": "Nest",
        "productDescription": "Wifi camera.",
        "productPrice":	199.00,
        "imageName": "nestCam.jpg",
        "categoryNumber": 2
    },{
		"productID": 8,
        "productName": "Nest Cam Outdoor",
        "productManufacturer": "Nest",
        "productDescription": "Security camera.",
        "productPrice":	199.00,
        "imageName": "nestCamOutdoor.jpg",
        "categoryNumber": 2 
	}, {
		"productID": 9,
        "productName": "Phillips Hue Color A19 Starter Kit",
        "productManufacturer": "Phillips",
        "productDescription": "Controllable, Color changing LED bulbs.",
        "productPrice":	199.00,
        "imageName": "phillipsHue.jpg",
        "categoryNumber": 2
	}, {
		"productID": 10,
        "productName": "OnHub from Asus",
        "productManufacturer": "Asus",
        "productDescription": "Wireless router",
        "productPrice":	199.00,
        "imageName": "asusOnHub.jpg",
        "categoryNumber": 2
	}, {
		"productID": 11,
        "productName": "OnHub from TP-LINK",
        "productManufacturer": "TP-LINK",
        "productDescription": "Wireless router.",
        "productPrice":	199.00,
        "imageName": "tplinkOnHub.jpg",
        "categoryNumber": 2
	}, {
        "productID": 12,
        "productName": "Shells for OnHub",
        "productManufacturer": "TP-LINK",
        "productDescription": "Stylish Cover for TP-LINK OnHub devices.",
        "productPrice":	29.00,
        "imageName": "shellOnHub.jpg",
        "categoryNumber": 8
    }, {
        "productID": 13,
        "productName": "Daydream View",
        "productManufacturer": "Google",
        "productDescription": "VR device, works with Daydream enabled phones.",
        "productPrice":	79.00,
        "imageName": "googleDaydreamView.jpg",
        "categoryNumber": 3
    }, {
        "productID": 14,
        "productName": "Google Cardboard",
        "productManufacturer": "Google",
        "productDescription": "Affordable VR device",
        "productPrice":	15.00,
        "imageName": "googleCardboard.jpg",
        "categoryNumber": 3
    },{
		"productID": 15,
        "productName": "Chromecast Ultra",
        "productManufacturer": "Google",
        "productDescription": "Streaming device, streams 4k UHD and HDR.",
        "productPrice":	69.00,
        "imageName": "ChromecastUltra.jpg",
        "categoryNumber": 4
	}, {
		"productID": 16,
        "productName": "Chromecast",
        "productManufacturer": "Google",
        "productDescription": "Streaming Device",
        "productPrice":	35.00,
        "imageName": "googleChromecast.jpg",
        "categoryNumber": 4
	}, {
		"productID": 17,
        "productName": "Chromecast Audio",
        "productManufacturer": "Google",
        "productDescription": "Stream music from your phone to your speaker.",
        "productPrice":	35.00,
        "imageName": "ChromecastAudio.jpg",
        "categoryNumber": 4
	}, {
		"productID": 18,
        "productName": "Pixel C",
        "productManufacturer": "Google",
        "productDescription": "Fast, Compact tablet with high resolution display.",
        "productPrice":	499.00,
        "imageName": "googlePixelC.jpg",
        "categoryNumber": 5
	}, {
        "productID": 19,
        "productName": "Acer Chromebook R 11",
        "productManufacturer": "Acer",
        "productDescription": "Chromebook that converts into a tablet.",
        "productPrice":	299.99,
        "imageName": "acerChromebookR11.jpg",
        "categoryNumber": 6
    }, {
        "productID": 20,
        "productName": "Acer Chromebook 14",
        "productManufacturer": "Acer",
        "productDescription": "Slim, fast, and compact Chromebook.",
        "productPrice":	299.99,
        "imageName": "acerChromebook14.jpg",
        "categoryNumber": 6
    }, {
        "productID": 21,
        "productName": "Acer Chromebook 11",
        "productManufacturer": "Acer",
        "productDescription": "Durable and powerful Chromebook.",
        "productPrice":	179.99,
        "imageName": "acerChromebook11.jpg",
        "categoryNumber": 6
    }, {
		"productID": 22,
        "productName": "The Mission Smartwatch",
        "productManufacturer": "Nixon",
        "productDescription": "Rugged smartwatch",
        "productPrice":	400,
        "imageName": "nixonMission.jpg",
        "categoryNumber": 7
	}, {
		"productID": 23,
        "productName": "Access Dylan Smartwatch",
        "productManufacturer": "Michael Kors",
        "productDescription": "Stylish luxury smartwatch.",
        "productPrice":	350,
        "imageName": "korsAccess.jpg",
        "categoryNumber": 7
	}, {
		"productID": 24,
        "productName": "Polar M600 Sports Watch",
        "productManufacturer": "Polar",
        "productDescription": "Personal firness Smart watch.",
        "productPrice":	329.95,
        "imageName": "polarM600.jpg",
        "categoryNumber": 7
	}, {
		"productID": 25,
        "productName": "Huawei Watch",
        "productManufacturer": "Huawei",
        "productDescription": "Luxury Smartwatch",
        "productPrice":	343.00,
        "imageName": "huaweiWatch.jpg",
        "categoryNumber": 7
	}];

    

    }
 

} //end of component class
