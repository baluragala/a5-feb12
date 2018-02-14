import { Component, Input, Output, EventEmitter } from "@angular/core";

/*
 1. class
 2. metadata
 3. template

*/

@Component({
  selector: "app-header",
  template: `
    <header (click)="handleClick()">
      <h1>{{ mainTitle }}</h1>
      <h3>{{ subTitle }}</h3>
    </header>
  `,
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  @Input() mainTitle;
  @Input() subTitle;

  @Output() onHeaderClick: EventEmitter<string> = new EventEmitter();

  handleClick() {
    this.onHeaderClick.emit("Header clicked!!");
  }
}
