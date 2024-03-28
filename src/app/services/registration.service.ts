import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/assets/environments/environment';
import { TeacherRegistrationDTO } from '../models/TeacherRegistrationDTO';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  registerTeacher(teacherData: TeacherRegistrationDTO): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}auth/registration/Teacher`, teacherData);
  }

  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}auth/registration/User`, userData)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
}
