import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product.interface";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ProductService {
  products;
  private cartSubject = new Subject<any>();
  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.cartSubject.next(product);
  }

  getCart() {
    return this.cartSubject.asObservable();
  }

  getProducts() {
    return this.http.get<Array<Product>>("http://localhost:4000/products");
  }

  addProduct(product) {
    // this.products.push(product);
    // console.log(this.products.length);
    return this.http.post<Product>("http://localhost:4000/products", product);
  }

  deleteProduct(id) {
    this.products = this.products.filter(p => id != p.id);
  }

  getProductById(id) {
    let p = this.products.find(p => p.id == id);
    return p;
  }
}
