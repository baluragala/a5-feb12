import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    req = req.clone({
      setHeaders: {
        "X-Auth-Token": "TOKEN"
      },
      setParams: { application: "estore" }
    });

    return next.handle(req).do(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          let e = event as HttpResponse<any>;
          console.log(e.body);
        }
      },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status == 404) {
            alert("Url not found");
          }
        }
      }
    );
  }
}
