import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

export interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
}

@Component({
  selector: "app-product-list-item",
  templateUrl: "./product-list-item.component.html",
  styleUrls: ["./product-list-item.component.css"]
})
export class ProductListItemComponent implements OnInit {
  @Input() item;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onAddToCartClick(item) {
    console.log(item);
    this.addToCart.emit(item);
  }
}
