import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubcategoryDTO } from '../dto/subcategory.dto';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  private baseUrl = environment.apiUrl + "subcategory";


  constructor(private http: HttpClient) { }

  getAllSubcategories(): Observable<SubcategoryDTO[]> {
    return this.http.get<SubcategoryDTO[]>(`${this.baseUrl}`);
  }

  getSubcategoryById(id: number): Observable<SubcategoryDTO> {
    return this.http.get<SubcategoryDTO>(`${this.baseUrl}/${id}`);
  }

  getSubcategoriesByCategoryId(categoryId: number): Observable<SubcategoryDTO[]> {
    return this.http.get<SubcategoryDTO[]>(`${this.baseUrl}/category/${categoryId}`);
  }

  createSubcategory(subcategory: SubcategoryDTO): Observable<SubcategoryDTO> {
    return this.http.post<SubcategoryDTO>(`${this.baseUrl}`, subcategory);
  }

  updateSubcategory(id: number, subcategory: SubcategoryDTO): Observable<SubcategoryDTO> {
    return this.http.put<SubcategoryDTO>(`${this.baseUrl}/${id}`, subcategory);
  }

  deleteSubcategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
