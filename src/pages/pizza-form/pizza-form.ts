import { Component } from '@angular/core';
import {NavController, NavOptions, NavParams} from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {PizzaServiceProvider} from '../../providers/pizza-service/pizza-service';
import {IngredientServiceProvider} from '../../providers/ingredient-service/ingredient-service';
import {Ingredient} from '../../model/ingredient';
import {Pizza} from '../../model/pizza';

/**
 * Generated class for the PizzaFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pizza-form',
  templateUrl: 'pizza-form.html',
})
export class PizzaFormPage {
  public base64Image: string;
  public imageData: string;
  public form: FormGroup;
  private ingredientsInPizza : Array<string>;
  private id: string;
  private currentPizza: Pizza;
  private ingredientList: Array<Ingredient>;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private pizzaService: PizzaServiceProvider,
              private ingredientService: IngredientServiceProvider,
              public camera: Camera
              ) {
    this.ingredientsInPizza = new Array<string>();
    this.base64Image='';
    this.form = new FormGroup({
      name: new FormControl(this.currentPizza ? this.currentPizza.name : '',
        Validators.compose([Validators.required,
          Validators.minLength(3)])),
      description: new FormControl(this.currentPizza ? this.currentPizza.description : '',
        Validators.compose([Validators.required])),
      price: new FormControl(this.currentPizza ? this.currentPizza.price : '',
        Validators.compose([Validators.required])),
    });
  }

  ionViewDidLoad() {
    if (this.navParams.get('id')) {
      this.id = this.navParams.get('id');
      this.pizzaService.getById(this.id).then((data: any) => {
        this.currentPizza = data;
        this.form.patchValue(this.currentPizza);
        this.ingredientsInPizza = this.currentPizza.ingredients.map(
          (item: any) => {
            console.log(item._id);
            return item._id;
          });
        console.log(this.ingredientsInPizza);
      });
    }
    this.ingredientService.load().then((data: any) => {
      this.ingredientList = data;
    });
  }

  toggleIngredient = (ing) => {
    if (this.ingredientsInPizza.indexOf(ing) === -1) {
      this.ingredientsInPizza.push(ing);
    } else {
      this.ingredientsInPizza.splice(this.ingredientsInPizza.indexOf(ing), 1);
    }
    console.log(this.ingredientsInPizza);
  }

  takePicture() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 640,
      targetHeight: 480
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.imageData = imageData;
    }, (err) => {
      console.log(err);
    });
  }

  savePizza = () => {
    let toSave = this.form.value;
      toSave.image = this.base64Image;
      toSave.ingredients = this.ingredientsInPizza;
      this.pizzaService.add(toSave).then(res => {
        this.navCtrl.goToRoot({});
      });
  }

  }
