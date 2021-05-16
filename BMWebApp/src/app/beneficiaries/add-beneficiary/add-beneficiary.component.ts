import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material';
import { Router } from '@angular/router';
import { Beneficiary } from 'src/app/models/beneficiary';
import { BeneficiaryRequest } from 'src/app/models/request';
import { BeneficiariesService } from 'src/app/services/beneficiaries.service';
import { UiMsgService } from 'src/app/services/ui-msg.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {
  addBeneficiaryForm: FormGroup;
  benefRequest = new BeneficiaryRequest();
  benefDetails = new Beneficiary();
  benefList: Beneficiary[] = [];
  userId: number;
  color: ThemePalette = 'accent';

  constructor(
    private _benefService: BeneficiariesService,
    private _formBuilder: FormBuilder,
    private _uiService: UiMsgService,
    private _router: Router) { }

  ngOnInit() {
    this._benefService.GetUserBeneficiaries(this.userId).subscribe(result => {
      if (result.Success){
        this.benefList = result.Data;
      }
    });

    this.addBeneficiaryForm = this._formBuilder.group({
      Name:['', Validators.required, Validators.minLength(5), Validators.maxLength(50)],
      AccountNumber:['',Validators.required, Validators.minLength(9), Validators.maxLength(20)],
      Reference:['',Validators.required, Validators.minLength(3), Validators.maxLength(50)],
      MainMemberId:[this.userId]
    });
  }

  saveBeneficiary(){
    this._uiService.showLoading('Saving, please wait....');
    this.benefDetails.Name = this.addBeneficiaryForm.value.Name;
    this.benefDetails.AccountNumber = this.addBeneficiaryForm.value.AccountNumber;
    this.benefDetails.Reference = this.addBeneficiaryForm.value.Reference;
    this.benefDetails.MainMemberId = this.addBeneficiaryForm.value.MainMemberId;

    this.benefRequest.Beneficary = this.benefDetails;

    const benef = this.benefExists();

    if (benef !== undefined && benef.AccountNumber !== null ) {
      this.benefRequest.Beneficary.MainMemberId = this.userId;
      this._benefService.UpdateBeneficiary(this.benefRequest).subscribe((result) => {
          if (result.Success) {
            this._uiService.snack('User has been successfully updated');
          } else {
            this._uiService.toast('Something went wrong while saving, please try again or contact system support');
          }
          this._uiService.hideLoading();
        });
      } else {
        this._benefService.AddBeneficiary(this.benefRequest).subscribe((result) => {
          if (result.Success) {
            this._uiService.snack('User has been successfully Added');
          } else {
            this._uiService.toast('Something went wrong while saving, please try again or contact system support');
          }
          this._uiService.hideLoading();
        });
      }
  }

  benefExists(): Beneficiary {
    if (this.benefList.length > 0) {
      const benef = this.benefList.find(x => x.AccountNumber == this.addBeneficiaryForm.value.AccountNumber);
      if (benef !== undefined) {
        return benef;
      }
    }
  }

  onNoClick() {
     this._router.navigateByUrl('/Home');
  }
  
  validateBenef() {
    if (this.benefList.length > 0) {
      const benef = this.benefList.find(x => x.AccountNumber == this.addBeneficiaryForm.value.AccountNumber);
      if (benef !== undefined) {
        this.addBeneficiaryForm.controls['AccountNumber'].setErrors({'Account Number already exist!':true});
      }
    }
  }

}
