import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Product } from "../product-list-item/product-list-item.component";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();
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

  ngOnInit() {}

  handleAddToCart(product) {
    this.addToCart.emit(product);
  }
}
