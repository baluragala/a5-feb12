import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductListItemComponent } from "./product-list-item/product-list-item.component";
import { CartComponent } from "./cart/cart.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ProductListComponent, ProductListItemComponent, CartComponent],
  exports: [ProductListComponent, CartComponent]
})
export class ProductsModule {}
