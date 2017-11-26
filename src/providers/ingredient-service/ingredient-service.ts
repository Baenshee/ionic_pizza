import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

/*
  Generated class for the IngredientServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IngredientServiceProvider {
  data: any;
  private readonly url = "https://jada-baenshee.c9users.io/ingredient";
  constructor(private http: HttpClient) {
    console.log('Hello IngredientServiceProvider Provider');
  }

  load(){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.url).subscribe((data: any) =>{
        console.log(data);
        this.data=data.ingredient;
        resolve(this.data);
      });
    })
  }
  getById(id){
    return new Promise(resolve => {
      this.http.get(this.url+'/'+id).subscribe((data: any) =>{
        console.log(data);
        this.data=data.ingredient;
        resolve(this.data);
      });
    })
  }

}
