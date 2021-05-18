import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material';
import { Router } from '@angular/router';
import { Beneficiary } from 'src/app/models/beneficiary';
import { BeneficiaryRequest } from 'src/app/models/request';
import { AuthenticationService } from 'src/app/services/authentication.service';
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
    private _authService: AuthenticationService,
    private _formBuilder: FormBuilder,
    private _uiService: UiMsgService,
    private _router: Router) { }

  ngOnInit() {

    if (typeof this._authService.currentUserValue === 'undefined' || this._authService.currentUserValue === null) {
      this._router.navigateByUrl('/login');
    }   
    console.log(`logeed in user is ${this._authService.currentUserValue.Id}`);
    this.userId = this._authService.currentUserValue.Id;
    
    this.addBeneficiaryForm = this._formBuilder.group({
      Name:['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      AccountNumber:['',[Validators.required, Validators.minLength(9), Validators.maxLength(20)]],
      Reference:['',[Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      MainMemberId:[this.userId]
    });
  }

  saveBeneficiary(){   
      this._uiService.showLoading('Saving, please wait....');
      this.benefDetails.Name = this.addBeneficiaryForm.value.Name;
      this.benefDetails.AccountNumber = this.addBeneficiaryForm.value.AccountNumber;
      this.benefDetails.Reference = this.addBeneficiaryForm.value.Reference;
      this.benefDetails.MainMemberId = this.userId;
      
      this._benefService.AddBeneficiary(this.benefDetails).subscribe((result) => {
          if (result.Success) {           
            this._uiService.snack('Beneficiary has been successfully Added');
            this._uiService.hideLoading();
            this._router.navigateByUrl('/Home');
          } else {
            console.log('We are here!');            
            this._uiService.hideLoading();
            this._uiService.toast('Something went wrong trying to add beneficiary!!');
          }
      },err => {
        console.log('failed to save!');
        this._uiService.hideLoading();
        this._uiService.toast(`${err}`);
      });        
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
