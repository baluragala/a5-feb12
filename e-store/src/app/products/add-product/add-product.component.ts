import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  title;
  price;
  stock;
  constructor() {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    console.log(f.value);
  }
}
