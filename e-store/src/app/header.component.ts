import { Component } from "@angular/core";

/*
 1. class
 2. metadata
 3. template

*/

@Component({
  selector: "app-header",
  template: `
    <header>
      <h1>E-Store App (inline)</h1>
    </header>
  `,
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  mainTitle = "E-Store App";
}
