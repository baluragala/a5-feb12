import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductListItemComponent } from "./product-list-item/product-list-item.component";
import { CartComponent } from "./cart/cart.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddProductReactiveComponent } from "./add-product-reactive/add-product-reactive.component";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    CartComponent,
    AddProductComponent,
    AddProductReactiveComponent
  ],
  exports: [
    ProductListComponent,
    CartComponent,
    AddProductComponent,
    AddProductReactiveComponent
  ]
})
export class ProductsModule {}
