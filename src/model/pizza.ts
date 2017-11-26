export class Pizza  {
  _id: string;
  name: string;
  description: string;
  price: number;
  ingredients: Array<string>;
  image: string;
  creationDate: Date;
  updateDate: Date;

  constructor(_id, name, description, price, ingredients, image, creationDate, updateDate) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
    this.image = image;
    this.creationDate = creationDate;
    this.updateDate = updateDate;
  }
}
