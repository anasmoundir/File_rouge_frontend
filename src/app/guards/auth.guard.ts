import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router, private toastr: ToastrService) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    console.log('AuthGuard canActivate method called.');

    if (this.loginService.isAuthenticated()) {
      console.log('User is authenticated. Allowing access to route.');
      return true;
    } else {
      console.log('User is not authenticated. Redirecting to login page.');
      this.toastr.error('Access Denied', 'Unauthorized');
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
