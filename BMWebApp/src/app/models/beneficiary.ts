export class Beneficiary {
    Id: number; 
    Name :String;
    AccountNumber: string;
    Reference: string;
    MainMemberId: number;
}

export class Beneficiaries {
    Beneficiaries: Beneficiary[] = [];
}