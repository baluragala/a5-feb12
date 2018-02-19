import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
  products = [
    {
      id: 100,
      title: "iphone",
      price: 1000,
      stock: 5
    },
    {
      id: 101,
      title: "pixel",
      price: 900,
      stock: 5
    },
    {
      id: 102,
      title: "note",
      price: 500,
      stock: 5
    },
    {
      id: 103,
      title: "edge",
      price: 800,
      stock: 5
    }
  ];
  constructor() {}

  getProducts() {
    return this.products;
  }

  addProduct(product) {
    this.products.push(product);
    console.log(this.products.length);
  }

  deleteProduct(id) {
    this.products = this.products.filter(p => id != p.id);
  }

  getProductById(id) {
    let p = this.products.find(p => p.id == id);
    return p;
  }
}
