import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PizzaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PizzaServiceProvider {
  data: any;
  private readonly url = "https://jada-baenshee.c9users.io/pizza";
  constructor(private http: HttpClient) {
    console.log('Hello PizzaServiceProvider Provider');
  }

  load(){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.url+'/slim').subscribe((data: any) =>{
        this.data=data.pizza;
        resolve(this.data);
      });
    })
  }
  getById(id){
    return new Promise(resolve => {
      this.http.get(this.url+'/'+id).subscribe((data: any) =>{
        this.data=data.pizza;
        resolve(this.data);
      });
    })
  }
  add(pizza){
    return new Promise(resolve => {
      this.http.post(this.url, {pizza: pizza}).subscribe((data: any) =>{
        resolve(data);
      });
    })
  }
}
