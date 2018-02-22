import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../product.interface";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-list-item",
  templateUrl: "./product-list-item.component.html",
  styleUrls: ["./product-list-item.component.css"]
})
export class ProductListItemComponent implements OnInit {
  @Input() item;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();
  constructor(private service: ProductService) {}

  ngOnInit() {}

  onAddToCartClick(item) {
    console.log(item);
    //this.addToCart.emit(item);
    this.service.addToCart(item);
  }
}
