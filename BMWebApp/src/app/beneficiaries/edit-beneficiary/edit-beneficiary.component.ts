import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Beneficiary } from 'src/app/models/beneficiary';
import { BeneficiaryRequest } from 'src/app/models/request';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BeneficiariesService } from 'src/app/services/beneficiaries.service';
import { UiMsgService } from 'src/app/services/ui-msg.service';

@Component({
  selector: 'app-edit-beneficiary',
  templateUrl: './edit-beneficiary.component.html',
  styleUrls: ['./edit-beneficiary.component.css']
})
export class EditBeneficiaryComponent implements OnInit {
  editBenefForm: FormGroup;
  name: string;
  accountNumber: string;
  reference: string;
  userId: number;
  updateBenef: Beneficiary;
  benefRequest = new BeneficiaryRequest();

  @Output() refreshUseCodesEvent = new EventEmitter<true>();
  constructor(
    private _formBuilder: FormBuilder,
    private _benefService: BeneficiariesService,
    public dialogRef: MatDialogRef<EditBeneficiaryComponent>,
    private _uiService: UiMsgService,
    private _router: Router,
    private _authService: AuthenticationService,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log('Eish!');
    console.log(this._authService.currentUserValue);
    if (typeof this._authService.currentUserValue === 'undefined' || this._authService.currentUserValue === null) {
      this._router.navigateByUrl('/login');
    }
    this.userId = this._authService.currentUserValue.Id;

    this.updateBenef = new Beneficiary();
    this.name = this.data['Name'];

    this.editBenefForm = this._formBuilder.group({
      Id: [this.data['Id']],
      Name: [this.data['Name']],
      AccountNumber: [this.data['AccountNumber'], [Validators.required,Validators.minLength(9)]],
      Reference: [this.data['Reference'], [Validators.required,Validators.minLength(3)]],
      MainMemberId: [this.data['MainMemberId']]
    });
  }

  saveBeneficiary() {   
    this.updateBenef.Id = this.editBenefForm.value['Id'];
    this.updateBenef.Name = this.editBenefForm.value['Name'];
    this.updateBenef.AccountNumber = this.editBenefForm.value['AccountNumber'];
    this.updateBenef.Reference = this.editBenefForm.value['Reference'];
    this.updateBenef.MainMemberId = this.editBenefForm.value['MainMemberId'];
    
    this.benefRequest.Beneficary = this.updateBenef;

    this._uiService.showLoading();
    this._benefService.UpdateBeneficiary(this.benefRequest)
      .subscribe((result) => {
        if (result.Data.valueOf() === true) {
          this._uiService.snack('Use code has been successfully updated');
        } else {
          this._uiService.toast('Something went wrong while saving, please try again or contact administrator');
        }
        this.dialogRef.close();
        this._uiService.hideLoading();        
      });
      this._router.navigateByUrl('/Home');
    }
}
