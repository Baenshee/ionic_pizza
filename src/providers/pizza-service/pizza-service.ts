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
  private readonly url = "http://10.13.2.167:8080/pizza";
  constructor(private http: HttpClient) {
    console.log('Hello PizzaServiceProvider Provider');
  }

  load(){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.url).subscribe(data =>{
        this.data=data;
        resolve(this.data);
      });
    })
  }
}
