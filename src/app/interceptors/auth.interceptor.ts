import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

     if (request.url.includes('/api/auth/login') || request.url.includes('/api/Registration')|| request.url.includes('/api/auth/registration/Teacher')||request.url.includes('/api/auth/registration/User'))
     {
      return next.handle(request);
    }

    const authToken = localStorage.getItem('accessToken');


    console.log('AuthInterceptor: ', authToken);

    if (authToken) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
      return next.handle(authRequest);
    } else {
      return next.handle(request);
    }
  }
}
