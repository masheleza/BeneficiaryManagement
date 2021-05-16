import {from, Observable} from 'rxjs';
import 'rxjs/add/operator/do';
import {Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import {AuthenticationService} from './../services/authentication.service';
import { tokenReference } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable()
export class Jwt implements HttpInterceptor {
    constructor(
        private _authService: AuthenticationService,
        private _router: Router
        ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         // add authorization header with jwt token if available
        let currentUser = this._authService.currentUserValue;
        let localToken = localStorage.getItem('currentUser');
        
        if (localToken != null) {
            const clonedReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${localToken}`
                }
            });
            return next.handle(clonedReq);
        }
        
        return next.handle(req);
    }

}