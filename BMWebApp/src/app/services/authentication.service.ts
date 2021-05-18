import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserAccount } from '../models/useraccount';
import { LoginRequest } from '../models/request';
import { ApiResult } from '../models/api-result';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseApiUrl = environment.serviceBaseUrl;
  private currentUserSubject: BehaviorSubject<UserAccount>;
  public currentUser: Observable<UserAccount>;

  constructor(
    private _http: HttpClient
  ) { 
    this.currentUserSubject = new BehaviorSubject<UserAccount>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserAccount {
    return this.currentUserSubject.value;
  }

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}

  login(loginRequest: LoginRequest) {
    return this._http.post<UserAccount>(`${this.baseApiUrl}/api/Authentication/login`,loginRequest)
    .pipe(map(user => {
      console.log(`we are back ${user.FirstName}`);
      if (user){
        console.log(`we are back ${user.FirstName}`);
        console.log(JSON.stringify(user));
        localStorage.setItem('currentUser',JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }
    }));
  }
}
