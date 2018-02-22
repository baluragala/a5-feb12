import { Component, OnInit, Output, EventEmitter, Inject } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../product.interface";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();
  products: Array<Product>;
  constructor(private service: ProductService, @Inject("FACTORY") key: string) {
    console.log(key);
  }

  ngOnInit() {
    this.service
      .getProducts()
      .subscribe(products => (this.products = products));
  }

  handleAddToCart(product) {
    this.addToCart.emit(product);
  }
}
