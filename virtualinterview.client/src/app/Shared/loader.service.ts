import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private httpLoading$ = new ReplaySubject<boolean>(1);
  constructor() { }
  /**
   * Returns an observable that emits the current HTTP loading status.
   * @returns An observable of boolean values indicating the loading status.
   */
  httpProgress(): Observable<boolean> {
    return this.httpLoading$.asObservable();
  }
  /**
   * Sets the HTTP loading status.
   * @param inprogess A boolean value indicating whether an HTTP request is in progress.
   */
  setHttpProgressStatus(inprogess: boolean) {
    this.httpLoading$.next(inprogess);
  }
}
