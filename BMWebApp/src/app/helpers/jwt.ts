import {Observable} from 'rxjs';
import {Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import {AuthenticationService} from './../services/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class Jwt implements HttpInterceptor {
    constructor(private _authService: AuthenticationService,
        private _router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         // add authorization header with jwt token if available         
        let currentUser = this._authService.currentUserValue;
     
        if (currentUser && currentUser.token ) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }       
        
        return next.handle(req);
    }

}

