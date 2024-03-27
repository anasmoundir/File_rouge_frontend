import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class JwtDecodeService {


  constructor(private jwtHelper: JwtHelperService) { }

  decodeToken(token: string): any {
    try {
      return this.jwtHelper.decodeToken(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  getTokenExpirationDate(token: string): Date | null {
    try {
      return this.jwtHelper.getTokenExpirationDate(token);
    } catch (error) {
      console.error('Error getting token expiration date:', error);
      return null;
    }
  }

  isTokenExpired(token: string): boolean {
    try {
      return this.jwtHelper.isTokenExpired(token);
    } catch (error) {
      console.error('Error checking if token is expired:', error);
      return true;
    }
  }
}
