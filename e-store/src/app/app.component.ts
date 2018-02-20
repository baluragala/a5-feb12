import {
  Component,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from "@angular/core";

import { Observable } from "rxjs/Rx";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  cart = [];

  constructor(private http: HttpClient) {}
  handleAddToCart(product) {
    this.cart.push(product);
  }

  ngOnInit() {
    // let mystream$ = Observable.create(function subscribe(observer) {
    //   let i = 0;
    //   setInterval(function() {
    //     observer.next(++i);
    //     if (i % 5 == 0) {
    //       observer.complete();
    //     }
    //   }, 1000);
    // });

    // mystream$.subscribe(
    //   function next(d) {
    //     console.log(d);
    //   },
    //   function error() {
    //     console.error("error");
    //   }
    // );
    // mystream$.subscribe(function next(d) {
    //   console.log(d);
    // });

    // Observable.from([1, 2, 3, 4, 5]).subscribe(d => console.log(d));
    // Observable.of({ name: "zeo", course: "angular" }).subscribe(d =>
    //   console.log(d)
    // );

    // Observable.range(1, 10).subscribe(d => console.log(d));
    // Observable.interval(1000)
    //   .take(5)
    //   .subscribe(d => console.log(d));

    // Observable.fromPromise(Promise.resolve("Awesome!!!")).subscribe(d =>
    //   console.log(d)
    // );

    Observable.range(1, 10)
      .map(v => v * 2)
      .filter(v => v % 4 === 0)
      .subscribe(d => console.log(d));
    this.http
      .get("https://api.github.com/users/baluragala")
      .subscribe(d => console.log(d));
  }
}
