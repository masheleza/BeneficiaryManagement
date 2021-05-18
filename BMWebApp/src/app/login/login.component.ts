import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginRequest } from '../models/request';
import { UserAccount } from '../models/useraccount';
import { AuthenticationService } from '../services/authentication.service';
import { UiMsgService } from '../services/ui-msg.service';
import { first } from 'rxjs/operators';

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
    if (typeof this._authService.currentUserValue !== 'undefined'){
      this._router.navigate(['/home']);
    }
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
        this._authService.login(this.loginRequest)
        .pipe(first()).subscribe( result => {
          console.log("logged in valid");
           console.log(JSON.stringify(result));          
            this._uiService.hideLoading();
            this._router.navigate([this.returnUrl]);
        }, (err) => {
          console.log(err)
          this._uiService.toast('Something went wrong!');
          this._uiService.hideLoading();          
        });
      }
}
}
