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
  private readonly url = "https://jada-baenshee.c9users.io/ingredient";
  constructor(private http: HttpClient) {
    console.log('Hello IngredientServiceProvider Provider');
  }

  load(){

    return new Promise(resolve => {
      this.http.get(this.url).subscribe((data: any) =>{
        console.log(data);
        resolve(data.ingredient);
      });
    })
  }
  getById(id){
    return new Promise(resolve => {
      this.http.get(this.url+'/'+id).subscribe((data: any) =>{
        console.log(data);
        resolve(data.ingredient);
      });
    })
  }
  add(data){
    return new Promise(resolve => {
      this.http.post(this.url, {ingredient: data}).subscribe((data: any) =>{
        resolve(data.ingredient);
      });
    })
  }
  update(data){
    return new Promise(resolve => {
      this.http.put(this.url, {ingredient: data}).subscribe((data: any) =>{
        resolve(data.ingredient);
      });
    })
  }
  delete(id){
    return new Promise(resolve => {
      this.http.delete(this.url+'/'+id).subscribe((data: any) =>{
        resolve(data);
      });
    })
  }


}
