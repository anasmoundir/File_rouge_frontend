import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private loginservice:LoginService ) {}
  login() {
    this.loginservice.login(this.username, this.password).subscribe(

      (response: any) => {
        localStorage.setItem('accessToken', response.accessToken);
        console.log('Login successful:', response);
        console.log(response.accessToken);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
