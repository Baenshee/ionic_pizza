import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { PizzaPage } from '../pages/pizza/pizza';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PizzaServiceProvider } from '../providers/pizza-service/pizza-service';
import {PizzaDescriptionPage} from '../pages/pizza-description/pizza-description';
import {CartPage} from '../pages/cart/cart';
import { IngredientServiceProvider } from '../providers/ingredient-service/ingredient-service';
import {IngredientsPage} from '../pages/ingredients/ingredients';
import {PizzaFormPage} from '../pages/pizza-form/pizza-form';
import {Camera} from '@ionic-native/camera';
import {IngredientFormPage} from '../pages/ingredient-form/ingredient-form';

@NgModule({
  declarations: [
    MyApp,
    PizzaPage,
    PizzaDescriptionPage,
    CartPage,
    IngredientsPage,
    PizzaFormPage,
    IngredientFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PizzaPage,
    PizzaDescriptionPage,
    CartPage,
    IngredientsPage,
    PizzaFormPage,
    IngredientFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzaServiceProvider,
    HttpClient,
    IngredientServiceProvider,
    Camera
  ]
})
export class AppModule {}
