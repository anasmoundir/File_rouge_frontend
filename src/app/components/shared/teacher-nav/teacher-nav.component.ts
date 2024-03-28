import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-teacher-nav',
  templateUrl: './teacher-nav.component.html',
  styleUrls: ['./teacher-nav.component.css']
})
export class TeacherNavComponent {
  constructor(private loginService: LoginService, private toastr: ToastrService,private router:Router) {}
  logout(): void {
    this.loginService.logout();
    this.toastr.info('You Are Logged out.', 'Success');
    this.router.navigate(['/login']);
  }
}
