import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material';
import { Router } from '@angular/router';
import { UserAccount } from 'src/app/models/useraccount';
import { UiMsgService } from 'src/app/services/ui-msg.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  userName: string;
  userDetails = new UserAccount();
  usersList: UserAccount[] = [];
  isActive: boolean;
  isAdmin: boolean;
  color: ThemePalette = 'accent';

  constructor(
    private _userService: UsersService,
    private _formBuilder: FormBuilder,
    private _uiService: UiMsgService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._userService.GetAllUsers().subscribe(results => {
      if(results.Success){
        this.usersList = results.Data;
      }
    });

    this.addUserForm = this._formBuilder.group({
      UserName: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      FirstName: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      Surname: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      Password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      ConfirmPassword: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      IsActive: [true],
      IsAdmin: [false]
    });
  }

  saveUser(){   
      this._uiService.showLoading('Saving please wait....');
      this.userDetails.UserName = this.addUserForm.value.UserName;
      this.userDetails.FirstName = this.addUserForm.value.FirstName;
      this.userDetails.Surname = this.addUserForm.value.Surname;
      this.userDetails.Password = this.addUserForm.value.Password;
      this.userDetails.IsActive = this.addUserForm.value.IsActive;
      this.userDetails.IsAdmin = this.addUserForm.value.IsAdmin;   
    
      this._userService.AddUser(this.userDetails).subscribe((result) => {
          if (result.Success) {
            this._uiService.snack('User has been successfully Added');
            this._router.navigateByUrl('/');
          } else {
            this._uiService.toast('Something went wrong while saving, please try again or contact system support');
          }});
        this._uiService.hideLoading();    
  }
  onNoClick() {
    this._router.navigateByUrl('/');
  }

  validateUser(): void {
    if (this.usersList.length > 0) {
      const user = this.usersList.find(x => x.UserName == this.addUserForm.value.UserName);
      if (user !== undefined){
        this.addUserForm.controls['UserName'].setErrors({'username already exist!':true});
      }
    }
  }
}
