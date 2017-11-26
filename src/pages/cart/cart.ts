import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Pizza} from '../../model/pizza';
import {PizzaDescriptionPage} from '../pizza-description/pizza-description';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  private list: Array<Pizza>
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
    this.list = JSON.parse(localStorage.getItem('cart'));
  }
  choosePizza(id) {
    console.log(id);
    this.navCtrl.push(PizzaDescriptionPage, {
      id:id
    })
  }
  removeFromCart(pizza) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(cart.indexOf(pizza), 1);
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.list.splice(this.list.indexOf(pizza), 1);
  }
}
