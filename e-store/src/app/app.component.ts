import {
  Component,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = "Angular 5";
  appTitle = "E-Audio";
  btnClassName;
  h2Style = { "background-color": "red", "font-weight": "bold" };
  today = new Date();
  user = { name: "zeo" };

  @ViewChild("para") paragraph: ElementRef;

  handleClick(e) {
    alert("clicked");
    console.log(e);
  }

  handleHeaderClicked(e) {
    console.log(e);
  }

  make250() {
    this.paragraph.nativeElement.innerText = "250 applied";
    this.btnClassName = "btn250";
  }

  make300() {
    this.paragraph.nativeElement.innerText = "300 applied";
    this.btnClassName = "btn300";
  }
}
