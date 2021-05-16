import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResult } from '../models/api-result';
import { UserRequest } from '../models/request';
import { Useraccount } from '../models/useraccount';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private _http: HttpClient) { }
  baseApiUrl = environment.serviceBaseUrl;

  AddUser(userRequest: UserRequest): Observable<ApiResult<string>> {
    return this._http.post<ApiResult<string>>(`${this.baseApiUrl}/api/User/RegisterUser`, userRequest);
  }

  GetAllUsers(): Observable<ApiResult<Array<Useraccount>>> {
    return this._http.get<ApiResult<Array<Useraccount>>>(`${this.baseApiUrl}/api/User/GetAllUsers`);
  }
}
