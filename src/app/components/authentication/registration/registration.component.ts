import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userData = {
    username: '',
    email: '',
    password: ''
  };


  constructor(private registrationService: RegistrationService, private toastr: ToastrService,    private router: Router
    ) {}

    registerUser(): void {
      console.log('User data:', this.userData);
      this.registrationService.registerUser(this.userData)
        .subscribe(
          response => {
            response.error('Error registering user:', response);
            this.toastr.error('Registration failed: ' + response.message);
          },
          error => {
            console.log('Registration response:', error);
            if (error.status === 201) {
              console.log('User registered successfully');
              this.toastr.success('Registration successful');
              this.router.navigate(['/login']);
            } else {
              console.error('Unexpected response:', error);
              this.toastr.error('Unexpected response from the server');
            }
          }
        );
    }
}
