import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CategoryListComponent } from '../pages/category-list/category-list';
import { ProductListComponent } from '../pages/product-list/product-list';
import { ProductByCategoryComponent } from '../pages/product-bycategory/product-bycategory';
import { ProductDetailComponent } from '../pages/product-detail/product-detail';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoryListComponent,
    ProductListComponent,
    ProductByCategoryComponent,
    ProductDetailComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryListComponent,
    ProductListComponent,
    ProductByCategoryComponent,
    ProductDetailComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
