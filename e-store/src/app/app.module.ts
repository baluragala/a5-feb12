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
import { AuthGuard } from "./auth.guard";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CheckWorkGuard } from "./check-work.guard";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToPowerPipe,
    HomeComponent,
    ContactUsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      {
        path: "contact-us",
        component: ContactUsComponent,
        canActivate: [AuthGuard]
      },
      { path: "**", component: PageNotFoundComponent, pathMatch: "full" }
    ])
  ],
  providers: [AuthGuard, CheckWorkGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
