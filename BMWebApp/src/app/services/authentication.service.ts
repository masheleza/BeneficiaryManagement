import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResult } from '../models/api-result';
import { LoginRequest } from '../models/request';
import { Useraccount } from '../models/useraccount';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseApiUrl = environment.serviceBaseUrl;
  private currentUserSubject: BehaviorSubject<Useraccount>;
  public currentUser: Observable<any>;

  constructor(
    private _http: HttpClient
  ) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Useraccount {
    return this.currentUserSubject.value;
  }

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}

  login(loginRequest: LoginRequest): Observable<any> {
    return this._http.post<ApiResult<Useraccount>>(`${this.baseApiUrl}/api/authentication/login`,loginRequest)
    .pipe(map(user => {
      if (user && user.Data.token){
        localStorage.setItem('currentUser',JSON.stringify(user));
        this.currentUserSubject.next(user.Data);
      }
    }));
  }
}
