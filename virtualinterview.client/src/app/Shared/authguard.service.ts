import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   * Constructor to inject necessary services.
   * @param loginservice Service to handle login operations.
   * @param router Router service to navigate.
   */
  constructor(private loginservice: LoginService, private router: Router) {
  }

  /**
   * Determines if a route can be activated.
   * @param route The activated route snapshot.
   * @param state The router state snapshot.
   * @returns A boolean or UrlTree indicating if the route can be activated.
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var token = this.loginservice.getAuthToken();
    if (!token) {
      return this.router.parseUrl('/adminlogin');
    }
    if (this.loginservice.isTokenExpired(token) === true || token === null || token === undefined || token === '') {
      this.loginservice.logout();
      return this.router.parseUrl('/adminlogin');
    }
    if (this.loginservice.getRoleName() === 'Admin') {
      this.router.parseUrl('/admin/users');
      return true;
    }
    return true;
  }
}
