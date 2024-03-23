import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/assets/environments/environment';
import { ResourcesDTO } from '../dto/resources.dto';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private baseUrl = environment.apiUrl + 'resources';

  constructor(private http: HttpClient) { }

  getRessourcesByLessonId(lessonId: number):Observable<ResourcesDTO[]> {
    const url = `${this.baseUrl}/lesson/${lessonId}`;
    return this.http.get<ResourcesDTO[]>(url);
  }
 

  uploadResource(formData: FormData): Observable<ResourcesDTO> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<ResourcesDTO>(`${this.baseUrl}/upload`, formData, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }

  deleteResource(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
