import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResult } from '../models/api-result';
import { Beneficiaries, Beneficiary } from '../models/beneficiary';
import { BeneficiaryRequest } from '../models/request';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeneficiariesService {
  constructor(private _http: HttpClient) { }
  baseApiUrl = environment.serviceBaseUrl;

  AddBeneficiary(beneficiaryRequest: Beneficiary) {
    console.log('We are in the service!');
    return this._http.post<ApiResult<Beneficiary>>(`${this.baseApiUrl}/api/Beneficiary/AddBeneficiary`,beneficiaryRequest);
  }

  UpdateBeneficiary(beneficiaryRequest: Beneficiary): Observable<ApiResult<Beneficiary>> {
    return this._http.put<ApiResult<Beneficiary>>(`${this.baseApiUrl}/api/Beneficiary/UpdateBeneficiary`,beneficiaryRequest);
  }

  DeleteBeneficiary(beneficiaryRequest: Beneficiary) {
    return this._http.delete<ApiResult<Beneficiary>>(`${this.baseApiUrl}/api/Beneficiary/RemoveBeneficiary?benefId=${beneficiaryRequest.Id}`);
  }
  
  GetUserBeneficiaries(user: number) {
    return this._http.get<ApiResult<Beneficiaries>>(`${this.baseApiUrl}/api/Beneficiary/GetBeneficiaries?userId=${user}`).pipe(map(
      res => {
        return res.Data as Beneficiaries;
      }));
  }
}
