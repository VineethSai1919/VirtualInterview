import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateDataService {
  private termData: any;

  private sharedDataSubject = new BehaviorSubject<any>(null);
  sharedData$ = this.sharedDataSubject.asObservable();

  wizardData(orgId?: string) {
    this.sharedDataSubject.next(orgId);
  }

  constructor(private http: HttpClient) { }

  setTermData(data: any) {
    this.termData = data;
  }

  getTermData() {
    return this.termData;
  }

  loadVoices(): Promise<any> {
    return this.http.get('assets/Languages/voices.json').toPromise();
  }
}
