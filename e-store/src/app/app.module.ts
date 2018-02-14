import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer/footer.component";
import { ToPowerPipe } from './to-power.pipe';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, ToPowerPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
