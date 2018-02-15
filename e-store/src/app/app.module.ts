import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer/footer.component";
import { ToPowerPipe } from "./to-power.pipe";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { ProductListItemComponent } from "./products/product-list-item/product-list-item.component";
import { CartComponent } from "./products/cart/cart.component";
import { ProductsModule } from "./products/products.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, ToPowerPipe],
  imports: [BrowserModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
