import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/assets/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.baseUrl+'teacher');
  }

  approveTeacher(teacherId: number): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.baseUrl}teacher/${teacherId}/approve`, {});
  }
}
