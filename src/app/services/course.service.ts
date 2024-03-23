import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseDTO } from '../dto/course.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/assets/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = environment.apiUrl +'course';

  constructor(private http: HttpClient) { }
  getCoursesOfTheCurrentTeacher(): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(`${this.baseUrl}/instructor`);
  }
  createCourse(course: CourseDTO): Observable<CourseDTO> {
    return this.http.post<CourseDTO>(`${this.baseUrl}`, course);
  }

  getCourseById(id: number): Observable<CourseDTO> {
    return this.http.get<CourseDTO>(`${this.baseUrl}/${id}`);
  }

  updateCourse(id: number, course: CourseDTO): Observable<CourseDTO> {
    return this.http.put<CourseDTO>(`${this.baseUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
