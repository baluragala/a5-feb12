import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AddProductReactiveComponent } from "./products/add-product-reactive/add-product-reactive.component";

@Injectable()
export class CheckWorkGuard
  implements CanDeactivate<AddProductReactiveComponent> {
  canDeactivate(
    component: AddProductReactiveComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    let response = confirm("Would like to leave the page");
    return response;
  }
}
