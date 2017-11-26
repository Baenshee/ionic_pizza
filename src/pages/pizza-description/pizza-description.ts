import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Pizza} from '../../model/pizza';
import {PizzaServiceProvider} from '../../providers/pizza-service/pizza-service';

/**
 * Generated class for the PizzaDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pizza-description',
  templateUrl: 'pizza-description.html',
})
export class PizzaDescriptionPage {
  private id: string;
  private currentPizza: Pizza;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaService: PizzaServiceProvider) {
    this.id = navParams.get('id');
    this.pizzaService.getById(this.id).then((data: any) => {
      this.currentPizza = data;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzaDescriptionPage');
  }

  addToCart() {
    if (localStorage.getItem('cart')) {
      let cart = JSON.parse(localStorage.getItem('cart'));
      cart.push(this.currentPizza);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    else {
      localStorage.setItem('cart', JSON.stringify([this.currentPizza]));
    }
    this.navCtrl.pop();
  }

}
