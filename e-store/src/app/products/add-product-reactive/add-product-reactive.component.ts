import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { ProductService } from "../product.service";

@Component({
  selector: "app-add-product-reactive",
  templateUrl: "./add-product-reactive.component.html",
  styleUrls: ["./add-product-reactive.component.css"]
  //providers: [{ provide: ProductService, useClass: ProductService }]
})
export class AddProductReactiveComponent implements OnInit {
  productForm: FormGroup;
  //private formBuilder;
  constructor(
    private formBuilder: FormBuilder,
    private service: ProductService
  ) {
    //this.formBuilder = formBuilder;
  }

  ngOnInit() {
    // this.productForm = new FormGroup({
    //   title: new FormControl("pixel", [
    //     Validators.required,
    //     Validators.minLength(5),
    //     Validators.maxLength(10)
    //   ]),
    //   price: new FormControl(),
    //   stock: new FormControl()
    // });
    this.productForm = this.formBuilder.group({
      title: [
        "pixel",
        [Validators.required, Validators.minLength(5), Validators.maxLength(10)]
      ],
      price: "",
      stock: ""
    });
  }

  onSubmit() {
    console.log(this.productForm.value);
    this.service.addProduct(this.productForm.value);
  }

  load() {
    //this.productForm.setValue({ title: "iphone", price: 600, stock: 500 });
    this.productForm.patchValue({ tite: "iphone", price: 600, stock: 500 });
  }
}
