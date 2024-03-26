import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtDecodeService } from 'src/app/services/jwt-decode.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private jwtDecodeService: JwtDecodeService, private router: Router, private toastr: ToastrService) { }

  canActivate(): boolean {
    const token = localStorage.getItem('accessToken') || '';
    const decodedToken = this.jwtDecodeService.decodeToken(token);
    if (!decodedToken || decodedToken.role !== 'ADMIN') {
      this.toastr.error('Access Denied', 'Unauthorized');
      this.router.navigate(['/access-denied']);
      return false;
    }
    return true;
  }
}
