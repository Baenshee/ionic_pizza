import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Ingredient} from '../../model/ingredient';
import {IngredientServiceProvider} from '../../providers/ingredient-service/ingredient-service';
import {IngredientFormPage} from '../ingredient-form/ingredient-form';

/**
 * Generated class for the IngredientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ingredients',
  templateUrl: 'ingredients.html',
})
export class IngredientsPage {
  public ingredientList: Array<Ingredient>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private ingredientService: IngredientServiceProvider) {
    this.ingredientList=[];
  }

  ionViewDidEnter() {
    this.ingredientService.load().then((data: any)=>{
      console.log(data);
      this.ingredientList=data;
    });
  }
  updateIngredient(id) {
    console.log(id);
    this.navCtrl.push(IngredientFormPage, {
      id:id
    });
  }
}
