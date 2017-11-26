import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PizzaServiceProvider} from "../../providers/pizza-service/pizza-service";
import {PizzaDescriptionPage} from '../pizza-description/pizza-description';

/**
 * Generated class for the PizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pizza',
  templateUrl: 'pizza.html',
})
export class PizzaPage {
  private pizzaList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaService: PizzaServiceProvider) {
    console.log("constructor"+this.pizzaList)
  }

  ionViewDidEnter() {
    console.log("on load"+this.pizzaList)
    this.pizzaList=[];
    this.pizzaService.load().then((data)=>{
      this.pizzaList=[];
      console.log(data);
      this.pizzaList=data;
    });
  }
  choosePizza(id) {
    console.log("choose pizza"+this.pizzaList)
    console.log(id);
    this.navCtrl.push(PizzaDescriptionPage, {
      id:id
    })
  }

}
