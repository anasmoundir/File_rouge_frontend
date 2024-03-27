import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { JwtDecodeService } from 'src/app/services/jwt-decode.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private toastr: ToastrService, private jwtDecodeService: JwtDecodeService, private router: Router) {}

  login(): void {
    this.loginService.login(this.username, this.password).subscribe(
      (response: any) => {
        localStorage.setItem('accessToken', response.accessToken);
        console.log('Login successful:', response);
        console.log(response.accessToken);

        const decodedToken = this.jwtDecodeService.decodeToken(response.accessToken);

        if (decodedToken && decodedToken.role) {
          const role = decodedToken.role;
          console.log(role);
          switch (role) {

            case 'ADMIN':
              this.router.navigate(['/dashboard']);
              break;
            case 'TEACHER':
              this.router.navigate(['/teacher'])
              break;
            case 'STUDENT':
              this.router.navigate(['/student'])
              break;
            default:
              this.router.navigate(['/access-denied']);
              break;
          }
        }

        this.toastr.success('Login successful', 'Success');
      },
      (error) => {
        console.error('Login failed:', error);
        this.toastr.error('Login failed', 'Error');
      }
    );
  }
}
