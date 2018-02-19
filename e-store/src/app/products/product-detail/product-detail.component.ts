import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  constructor(private service: ProductService, private route: ActivatedRoute) {}
  product;
  ngOnInit() {
    let id = this.route.snapshot.params["pid"];
    this.product = this.service.getProductById(id);
  }
}
