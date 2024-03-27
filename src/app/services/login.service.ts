import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/environments/environment';
import { JwtDecodeService } from 'src/app/services/jwt-decode.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private jwtDecodeService: JwtDecodeService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}auth/login`, { username, password });
  }

  logout(): void {
    localStorage.removeItem('accessToken');
  }

  isAuthenticated(): boolean {
    const accessToken = localStorage.getItem('accessToken');
    console.log('Access token:', accessToken);
    return !!accessToken && !this.isTokenExpired(accessToken);
  }

  private isTokenExpired(token: string): boolean {
    if (!token) {
      return true;
    }

    const expirationDate = this.jwtDecodeService.getTokenExpirationDate(token);
    if (!expirationDate) {
      return true;
    }
    return expirationDate.getTime() < Date.now();
  }


}
