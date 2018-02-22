import { Component, OnInit, Input } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../product.interface";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  constructor(private service: ProductService) {}

  ngOnInit() {
    this.service.getCart().subscribe(
      p => {
        this.cart.push(p);
      },
      err => console.error(err)
    );
  }
}
