import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductListItemComponent } from "./product-list-item/product-list-item.component";
import { CartComponent } from "./cart/cart.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddProductReactiveComponent } from "./add-product-reactive/add-product-reactive.component";
import { ProductService } from "./product.service";
import { Productv2Service } from "./productv2.service";

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
  ],
  providers: [
    { provide: ProductService, useClass: ProductService },
    {
      provide: "API_ENDPOINT",
      useValue: { api: "http://api.abc.com" }
    },
    {
      provide: "FACTORY",
      useFactory: function() {
        if (Math.random() * 2 > 2) {
          return new String();
        } else {
          return new Number();
        }
      }
    }
  ]
})
export class ProductsModule {}
