import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/assets/environments/environment';
import { LessonDTO } from '../dto/lesson.dto';
import { Lesson } from '../models/lesson.interface';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private baseUrl = environment.apiUrl + 'lesson';
  constructor(private http: HttpClient) { }
  getLessonsByCourseId(courseId: number): Observable<any> {
    const url = `${this.baseUrl}/course/${courseId}`;
    return this.http.get<any>(url).pipe(
      catchError((error: any) => {
        console.error('Error fetching lessons:', error);
        return throwError('Error fetching lessons. Please try again later.');
      })
    );
  }

  getAllLessons(): Observable<LessonDTO[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<LessonDTO[]>(url).pipe(
      catchError((error: any) => {
        console.error('Error fetching lessons:', error);
        return throwError('Error fetching lessons. Please try again later.');
      })
    );
  }

  getLessonById(id: number): Observable<LessonDTO> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<LessonDTO>(url).pipe(
      catchError((error: any) => {
        console.error(`Error fetching lesson with ID ${id}:`, error);
        return throwError(`Error fetching lesson with ID ${id}. Please try again later.`);
      })
    );
  }

  createLesson(courseId: number, lesson: LessonDTO): Observable<LessonDTO> {
    const url = `${this.baseUrl}/${courseId}/lessons`;
    return this.http.post<LessonDTO>(url, lesson).pipe(
      catchError((error: any) => {
        console.error('Error creating lesson:', error);
        return throwError('Error creating lesson. Please try again later.');
      })
    );
  }


  updateLesson(id: number, lesson: LessonDTO): Observable<LessonDTO> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<LessonDTO>(url, lesson).pipe(
      catchError((error: any) => {
        console.error(`Error updating lesson with ID ${id}:`, error);
        return throwError(`Error updating lesson with ID ${id}. Please try again later.`);
      })
    );
  }

  // Delete a lesson
  deleteLesson(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError((error: any) => {
        console.error(`Error deleting lesson with ID ${id}:`, error);
        return throwError(`Error deleting lesson with ID ${id}. Please try again later.`);
      })
    );
  }

  addLessonToCourse(courseId: number, lesson: LessonDTO): Observable<Lesson> {
    const url = `${this.baseUrl}/${courseId}/lessons`;
    return this.http.post<Lesson>(url, lesson).pipe(
      catchError((error: any) => {
        console.error('Error adding lesson:', error);
        return throwError('Error adding lesson. Please try again later.');
      })
    );
  }
}
