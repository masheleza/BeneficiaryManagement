import { Beneficiary } from "./beneficiary";
import { UserAccount } from "./useraccount";

export class UserRequest {
    User: UserAccount;
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
