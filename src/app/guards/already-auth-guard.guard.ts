import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr'; // Import ToastrService
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AlreadyAuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(): boolean {
    if (this.loginService.isAuthenticated()) {
      const role = this.loginService.getUserRole();
      switch (role) {
        case 'ADMIN':
          this.router.navigate(['/dashboard']);
          this.toastr.info('You are already logged in as ADMIN', 'Info');
          break;
        case 'TEACHER':
          this.router.navigate(['/teacher']);
          this.toastr.info('You are already logged in as TEACHER', 'Info');
          break;
        case 'STUDENT':
          this.router.navigate(['/student']);
          this.toastr.info('You are already logged in as STUDENT', 'Info');
          break;
        default:
          this.router.navigate(['/access-denied']);
          this.toastr.info('You are already logged in with unknown role', 'Info');
          break;
      }
      return false;
    } else {
      return true;
    }
  }
}
