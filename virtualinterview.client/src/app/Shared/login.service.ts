import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  tokenName = "AI_session"
  private loginStatus: BehaviorSubject<boolean>;
  private userName: BehaviorSubject<string>;
  constructor(private router: Router) {
    this.loginStatus = new BehaviorSubject(true);
    this.userName = new BehaviorSubject("");

  }

  /**
   * Sets the authentication token in local storage and updates the login status.
   * @param token - The authentication token to be set.
   */
  setAuthToken(token: string) {
    localStorage.setItem(this.tokenName, token);
    this.loginStatus.next(true);
  }
  /**
  * Retrieves the authentication token from local storage.
  * @returns The authentication token.
  */
  getAuthToken(): string {
    return localStorage.getItem(this.tokenName) ?? "";
  }
  /**
   * Retrieves the user's name from the authentication token.
   * @returns The user's name.
   */
  getName(): string {
    if (this.getAuthToken()) {
      const decoded: any = jwtDecode(this.getAuthToken());
      return decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']

    }
    return "";
  }
  /**
   * Logs out the user by removing the authentication token and clearing local storage.
   */
  logout() {
    localStorage.removeItem(this.tokenName);
    localStorage.clear();
    this.loginStatus.next(false);
  }
  /**
   * Checks if the user is authenticated by verifying the token's expiration status.
   * @returns True if the user is authenticated, otherwise false.
   */
  isAuthenticated(): boolean {
    return this.isTokenExpired(this.getAuthToken()) === false;
  }
  /**
  * Checks if the authentication token is expired.
  * @param token - The authentication token to be checked.
  * @returns True if the token is expired, otherwise false.
  */
  isTokenExpired(token: string): boolean {
    if (!token)
      return true;
    try {
      const date = this.getTokenExpirationDate(token);
      if (date === undefined || date === null) return true;
      return !(date.valueOf() > new Date().valueOf());
    }
    catch {
      return true;
    }
  }
  /**
   * Retrieves the expiration date of the authentication token.
   * @param token - The authentication token.
   * @returns The expiration date of the token, or null if it cannot be determined.
   */
  getTokenExpirationDate(token: string): Date | null {
    if (!token)
      return null;
    try {
      const decoded: any = jwtDecode(token);
      if (decoded.exp === undefined || decoded.exp === null) return null;
      const date = new Date(0);
      date.setUTCSeconds(decoded.exp);
      return date;
    }
    catch {
      return null;
    }
  }
  /**
   * Handles unauthorized errors by navigating to the home page and logging out the user.
   */
  unthorizedError() {
    this.router.navigate(['/'])
    this.logout();
  }
  /**
   * Handles forbidden errors by navigating to the home page.
   */
  forbiddenError() {
    this.router.navigate(['/'])
  }
  /**
   * Retrieves the login status as an observable.
   * @returns An observable of the login status.
   */
  getLoginStatus(): Observable<boolean> {
    return this.loginStatus.asObservable();
  }
  /**
   * Retrieves the user's role name from the authentication token.
   * @returns The user's role name.
   */
  getRoleName(): string {
    if (this.getAuthToken()) {
      const decoded: any = jwtDecode(this.getAuthToken());
      return decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    }
    else {
      return "";
    }
  }
  /**
   * Retrieves the user's ID from the authentication token.
   * @returns The user's ID.
   */
  getuserid(): string {
    if (this.getAuthToken()) {
      const decoded: any = jwtDecode(this.getAuthToken());
      return decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/primarysid'];
    }
    return "";
  }
  /**
   * Retrieves the user's username from the authentication token.
   * @returns The user's username.
   */
  getuserName(): string {
    if (this.getAuthToken()) {
      const decoded: any = jwtDecode(this.getAuthToken());
      return decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/Name'];
    }
    return "";
  }
}
