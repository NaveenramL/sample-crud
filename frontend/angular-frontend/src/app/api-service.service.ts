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

  getAllEntities(): Observable<any> {
    return this.http.get(`${this.baseUrl}/entities/all`);
  }

  createEntity(entity: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/entities`, entity);
  }

  createAttributes(attributes:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/attributes`, attributes);
}

}
