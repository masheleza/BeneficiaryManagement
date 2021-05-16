import {Observable} from 'rxjs';
import {Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import {AuthenticationService} from './../services/authentication.service';

@Injectable()
export class Jwt implements HttpInterceptor {
    constructor(private _authService: AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         // add authorization header with jwt token if available
        let currentUser = this._authService.currentUserValue;
        let reqClone = localStorage.getItem('currentUser');
        if (currentUser) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${reqClone}`
                }
            });
        }
        
        return next.handle(req);
    }

}

