import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoginService } from './login.service';
import { catchError, finalize, map } from 'rxjs/operators';
import { LoaderService } from './loader.service';

/**
 * InterceptorService is an HTTP interceptor that handles authentication tokens
 * and manages the loading indicator for HTTP requests.
 */
@Injectable()
export class InterceptorService implements HttpInterceptor {
  private count = 0;

  /**
   * Constructor to inject necessary services.
   * @param loginService Service to handle login operations.
   * @param loaderService Service to manage the loading indicator.
   */
  constructor(private loginService: LoginService, private loaderService: LoaderService) { }

  /**
   * Intercepts HTTP requests to add authentication tokens and manage loading indicator.
   * @param request The outgoing HTTP request.
   * @param next The next handler in the HTTP request chain.
   * @returns An observable of the HTTP event.
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.count === 0) {
      this.loaderService.setHttpProgressStatus(true);
    }
    this.count++;
    var token = this.loginService.getAuthToken();
    if (token) {
      if (!request.headers.get("Authorization")) {
        request = request.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        });
      }
    }
    return next.handle(request).pipe(catchError(err => {
      this.count--;
      if (this.count === 0) {
        this.loaderService.setHttpProgressStatus(false);
      }
      if (err.status === 401) {
        this.loginService.unthorizedError();
      }
      else if (err.status === 403) {
        this.loginService.forbiddenError();
      }
      return throwError(err);
    }), finalize(() => {
      this.count--;
      if (this.count === 0) {
        this.loaderService.setHttpProgressStatus(false);
      }
    }));
  }
}
