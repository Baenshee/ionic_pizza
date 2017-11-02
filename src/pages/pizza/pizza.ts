import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PizzaServiceProvider} from "../../providers/pizza-service/pizza-service";

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
  public pizzaList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaService: PizzaServiceProvider) {
    this.pizzaList=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzaPage');
    this.pizzaService.load().then((data)=>{
      console.log(data[0]);
      this.pizzaList=data;
    });
  }

}
