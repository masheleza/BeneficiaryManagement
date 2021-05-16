import { Beneficiary } from "./beneficiary";
import { Useraccount } from "./useraccount";

export class UserRequest {
    User: Useraccount;
  }
  
  export class BeneficiaryRequest {
    Beneficary: Beneficiary;
  }
  
  export class LoginRequest {
    UserName: string;
    Password: string;
  }
  
  export class UserLoginQueryResponse {
   token: string;
  }
