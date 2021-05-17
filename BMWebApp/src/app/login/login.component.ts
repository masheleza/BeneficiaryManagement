import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginRequest } from '../models/request';
import { UserAccount } from '../models/useraccount';
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
  private currentUserSubject: BehaviorSubject<UserAccount>;

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

    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/Home';
  }
  
  get formCont() {
    return this.loginForm.controls;
  }

  onRegister() {
    this._router.navigateByUrl('/Register');
  }
  
  onSubmit() {
    console.log("hello");
    this.submitted = true;
    if (this.loginForm.invalid) {
          return;
      } else {
        console.log("hello valid");
        this.loading = true;
        this.loginRequest.UserName = this.formCont.username.value;
        this.loginRequest.Password = this.formCont.password.value;
        console.log(`${this.loginRequest.UserName}`);
        this._authService.login(this.loginRequest).subscribe((result) => {
           console.log(JSON.stringify(result));
          if (result && result.Data.token ) {
            console.log(`${result.Data.token}`);
            this._router.navigate([this.returnUrl]);
            this._uiService.hideLoading();
            this._router.navigateByUrl('/Home');
          } else {
            console.log(`${result.Data.token}`);
            this._uiService.toast('Something went wrong while saving, please try again or contact system support');
            this._uiService.hideLoading();
          }
        }, (err) => {
          console.log(err)
        });
      }
}
}
