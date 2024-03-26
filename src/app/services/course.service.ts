import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { CourseDTO } from '../dto/course.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  createCourse(courseFormData: FormData): Observable<CourseDTO> {
    return this.http.post<CourseDTO>(`${this.baseUrl}/courses`, courseFormData)
      .pipe(
        tap(createdCourse => {
        }),
        catchError(error => {
          return throwError(error);
        })
      );
  }


  getAllCourses(): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(`${this.baseUrl}`);
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
