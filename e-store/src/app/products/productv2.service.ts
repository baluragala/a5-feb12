import { Injectable } from "@angular/core";

@Injectable()
export class Productv2Service {
  products = [
    {
      id: 100,
      title: "iphone2",
      price: 1000,
      stock: 5
    },
    {
      id: 101,
      title: "pixel2",
      price: 900,
      stock: 5
    },
    {
      id: 102,
      title: "note2",
      price: 500,
      stock: 5
    },
    {
      id: 103,
      title: "edge2",
      price: 800,
      stock: 5
    }
  ];
  constructor() {}

  getProducts() {
    return this.products;
  }
}
