import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _authService: AuthenticationService
) { }
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = this._authService.currentUserValue;
      if (currentUser) {   
        return true;
    }
   
    this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
