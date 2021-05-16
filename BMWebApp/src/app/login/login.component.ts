import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginRequest } from '../models/request';
import { Useraccount } from '../models/useraccount';
import { AuthenticationService } from '../services/authentication.service';
import { UiMsgService } from '../services/ui-msg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  authenticationService: any;
  loginRequest = new LoginRequest();
  private currentUserSubject: BehaviorSubject<Useraccount>;

  constructor(
    private _formBulder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _authService: AuthenticationService,
    private _uiService: UiMsgService
  ) { 

    /*if (this.authenticationService.currentUserValue !== undefined){
      this._router.navigate(['/']);
    }*/
  }

  ngOnInit() {
    this.loginForm = this._formBulder.group({
      username:['',Validators.required],
      password: ['',Validators.required]
    });

    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  get formCont() {
    return this.loginForm.controls;
  }

  onRegister() {
    this._router.navigateByUrl('/Register');
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
          return;
      } else {
        this.loading = true;
        this.loginRequest.UserName = this.formCont.username.value;
        this.loginRequest.Password = this.formCont.password.value;

        this._authService.login(this.loginRequest).subscribe((result) => {
          if (result && result.Data.token ) {
            this._router.navigate([this.returnUrl]);
          } else {
            this._uiService.toast('Something went wrong while saving, please try again or contact system support');
            this._uiService.hideLoading();
          }
        });
      }
}
}