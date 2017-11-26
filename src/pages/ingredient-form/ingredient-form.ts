import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {IngredientServiceProvider} from '../../providers/ingredient-service/ingredient-service';
import {Ingredient} from '../../model/ingredient';

/**
 * Generated class for the IngredientFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ingredient-form',
  templateUrl: 'ingredient-form.html',
})
export class IngredientFormPage {
  public form: FormGroup;
  private currentIngredient: Ingredient;
  private id: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private ingredientService: IngredientServiceProvider) {
    this.form = new FormGroup({
      name: new FormControl('',
        Validators.compose([Validators.required,
          Validators.minLength(3)])),
      price: new FormControl('',
        Validators.compose([Validators.required])),
      weight: new FormControl('',
        Validators.compose([Validators.required])),
    });
  }

  ionViewDidEnter() {
    if (this.navParams.get('id')) {
      this.id = this.navParams.get('id');
      this.ingredientService.getById(this.id).then((data: Ingredient) => {
        this.currentIngredient = data;
        this.form.patchValue(this.currentIngredient);
      });
    }
  }

  submit() {
    if (this.id) {
      this.updateIngredient();
    }
    else {
      this.saveIngredient();
    }
  }

  saveIngredient = () => {
    let toSave = this.form.value;
    this.ingredientService.add(toSave).then(res => {
      if(this.navCtrl.canGoBack())
        this.navCtrl.pop();
      else
        this.navCtrl.goToRoot({});
    });
  }

  updateIngredient = () => {
    let toSave = this.form.value;
    toSave._id=this.id;
    this.ingredientService.update(toSave).then(res => {
      this.navCtrl.pop();
    });
  }

  deleteIngredient = () => {
    this.ingredientService.delete(this.id).then(res => {
      this.navCtrl.pop();
    });
  }

}
