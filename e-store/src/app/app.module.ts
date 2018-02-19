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
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { AddProductReactiveComponent } from "./products/add-product-reactive/add-product-reactive.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToPowerPipe,
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "products", component: ProductListComponent },
      { path: "products/add", component: AddProductReactiveComponent },
      { path: "contact-us", component: ContactUsComponent },
      { path: "detail/:pid", component: ProductDetailComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
