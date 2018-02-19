import { Component, OnInit, Output, EventEmitter, Inject } from "@angular/core";
import { Product } from "../product-list-item/product-list-item.component";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();
  products;
  constructor(private service: ProductService, @Inject("FACTORY") key: string) {
    console.log(key);
  }

  ngOnInit() {
    this.products = this.service.getProducts();
  }

  handleAddToCart(product) {
    this.addToCart.emit(product);
  }
}
