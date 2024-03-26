import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtDecodeService } from 'src/app/services/jwt-decode.service';
import { ToastrService } from 'ngx-toastr';
import { take, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherGuard implements CanActivate {
  constructor(private jwtDecodeService: JwtDecodeService, private router: Router, private toastr: ToastrService) { }

  canActivate(): boolean {
    const token = localStorage.getItem('accessToken') || '';
    const decodedToken = this.jwtDecodeService.decodeToken(token);
    if (!decodedToken || decodedToken.role !== 'TEACHER') {
      this.toastr.error('Access Denied', 'Unauthorized');
      timer(3000).pipe(take(1)).subscribe(() => {
        this.router.navigate(['/access-denied']);
      });
      return false;
    }
    return true;
  }
}
