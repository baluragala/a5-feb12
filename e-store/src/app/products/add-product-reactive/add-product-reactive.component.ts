import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-add-product-reactive",
  templateUrl: "./add-product-reactive.component.html",
  styleUrls: ["./add-product-reactive.component.css"]
})
export class AddProductReactiveComponent implements OnInit {
  productForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.productForm = new FormGroup({
      title: new FormControl("pixel", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]),
      price: new FormControl(),
      stock: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
}
