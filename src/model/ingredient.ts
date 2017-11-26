export class Ingredient  {
  _id: string;
  name: string;
  price: number;
  weight: number;

  constructor(_id, name, weight, price) {
    this._id = _id;
    this.name = name;
    this.weight = weight;
    this.price = price;
  }
}
