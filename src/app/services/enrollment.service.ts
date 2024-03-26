import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/assets/environments/environment';
import { EnrollmentDTO } from '../dto/enrollment.dto';
import { Observable } from 'rxjs';
import { CourseDTO } from '../dto/course.dto';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private baseUrl = environment.apiUrl + 'enrollement';

  constructor(private http: HttpClient) { }

  enrollUser(courseId: number): Observable<EnrollmentDTO> {
    const data = { courseId: courseId };
    return this.http.post<EnrollmentDTO>(`${this.baseUrl}`, data);
  }
  cancelEnrollment(enrollmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/cancel/${enrollmentId}`);
  }

  getEnrolledCourses(): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(`${this.baseUrl}/user/courses`);
  }
}
