import { Token } from "@angular/compiler/src/ml_parser/lexer";
import { Beneficiary } from "./beneficiary";
import { UserAccount } from "./useraccount";

export class UserRequest {
    token: Token;
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
