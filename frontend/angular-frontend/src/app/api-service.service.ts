import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private baseUrl = 'http://localhost:3200';
  constructor(private http: HttpClient) { }

  getModels(): Observable<any> {
    return this.http.get(`${this.baseUrl}/models/all`);
  }

  createModel(model: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/model`, model);
  }

  getEntities(modelId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/entities/${modelId}`);
  }

  // createEntity(entity: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/entities`, entity);
  // }

  createEntity(entity: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/entities`, entity);
  }
}
