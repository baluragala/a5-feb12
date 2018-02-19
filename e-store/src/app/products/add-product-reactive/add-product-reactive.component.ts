import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-add-product-reactive",
  templateUrl: "./add-product-reactive.component.html",
  styleUrls: ["./add-product-reactive.component.css"]
})
export class AddProductReactiveComponent implements OnInit {
  productForm: FormGroup;
  //private formBuilder;
  constructor(private formBuilder: FormBuilder) {
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
  }

  load() {
    //this.productForm.setValue({ title: "iphone", price: 600, stock: 500 });
    this.productForm.patchValue({ tite: "iphone", price: 600, stock: 500 });
  }
}
