import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResult } from '../models/api-result';
import { Beneficiary } from '../models/beneficiary';
import { BeneficiaryRequest } from '../models/request';

@Injectable({
  providedIn: 'root'
})
export class BeneficiariesService {
  constructor(private _http: HttpClient) { }
  baseApiUrl = environment.serviceBaseUrl;

  AddBeneficiary(beneficiaryRequest: BeneficiaryRequest): Observable<ApiResult<Beneficiary>> {
    return this._http.post<ApiResult<Beneficiary>>(`${this.baseApiUrl}/api/Beneficiary/AddBeneficiary`,beneficiaryRequest);
  }

  UpdateBeneficiary(beneficiaryRequest: BeneficiaryRequest): Observable<ApiResult<Beneficiary>> {
    return this._http.post<ApiResult<Beneficiary>>(`${this.baseApiUrl}/api/Beneficiary/UpdateBeneficiary`,beneficiaryRequest);
  }

  DeleteBeneficiary(beneficiaryRequest: BeneficiaryRequest): Observable<ApiResult<Beneficiary>> {
    return this._http.post<ApiResult<Beneficiary>>(`${this.baseApiUrl}/api/Beneficiary/RemoveBeneficiary`, beneficiaryRequest);
  }

  GetUserBeneficiaries(userId: number): Observable<ApiResult<Array<Beneficiary>>> {
    return this._http.get<ApiResult<Array<Beneficiary>>>(`${this.baseApiUrl}/api/Beneficiary/GetBeneficiaries`);
  }
}
